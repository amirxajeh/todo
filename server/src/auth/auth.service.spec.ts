import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';

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

const userService = {
  findOne(args: { where: { username: string } }): any | null {
    if (args.where.username === VALID_CREDENTIALS.username) {
      return USER;
    }
    return null;
  },
};

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        {
          provide: UsersService,
          useValue: userService
        },
        AuthService,
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe("authService.validateUser()", () => {

    it("should validate a validUser", async () => {
      await expect(
        authService.validateUser(
          VALID_CREDENTIALS.username,
          VALID_CREDENTIALS.password
        )
      ).resolves.toEqual({
        username: USER.username,
        id: USER.id
      })
    })

    it('invalid credentials', async () => {
      await expect(
        authService.validateUser(
          INVALID_CREDENTIALS.username,
          INVALID_CREDENTIALS.password
        )
      ).resolves.toEqual(null)
    })
  })
});
