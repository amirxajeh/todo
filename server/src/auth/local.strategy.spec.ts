import { Test, TestingModule } from "@nestjs/testing";
import { User } from "../users/dto/user-dto";
import { PrismaService } from "../prisma.service";
import { AuthService } from "./auth.service";
import { CredentialsDto } from "./dto/credentials.dto";
import { LocalStrategy } from "./local.strategy";
import { UnauthorizedException } from "@nestjs/common";

const VALID_CREDENTIALS: CredentialsDto = {
  username: "Valid User",
  password: "Valid User Password",
};

const INVALID_CREDENTIALS: CredentialsDto = {
  username: "Invalid User",
  password: "Invalid User Password",
};

const USER: User = {
  ...VALID_CREDENTIALS,
  createdAt: new Date(),
  id: 1,
  updatedAt: new Date(),
};

const authService = {
  validateUser: (username: any, password: any) => {
    if (username === VALID_CREDENTIALS.username) {
      return {
        id: USER.id,
        username: USER.username
      };
    }
    return null;
  }
}

describe("Local Strategy passport", () => {
  let localStrategy: LocalStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: authService
        },
        LocalStrategy
      ],
    }).compile();

    localStrategy = module.get<LocalStrategy>(LocalStrategy);
  });

  it('should be defined', () => {
    expect(localStrategy).toBeDefined();
  });

  it('should return user if credentials is valid', async () => {
    await expect(
      localStrategy.validate(VALID_CREDENTIALS.username, VALID_CREDENTIALS.password)
    ).resolves.toEqual(
      {
        id: USER.id,
        username: USER.username
      }
    )
  })

  it('should return null if credentials is invalid', async () => {
    await expect(
      localStrategy.validate(INVALID_CREDENTIALS.username, INVALID_CREDENTIALS.password)
    ).rejects.toBeInstanceOf(
      UnauthorizedException
    )
  })
})