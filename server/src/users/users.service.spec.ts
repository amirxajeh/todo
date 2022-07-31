import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueIdInputDto } from './dto/user-where-unique-id-input.dto';
import { UserWhereUniqueUsernameInputDto } from './dto/user-where-unique-username-input.dto';
import { UsersService } from './users.service';

class MockUserService {
  findOne(args: any) { }
}

describe('UsersService', () => {
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: UsersService,
        useClass: MockUserService
      }],
    }).compile();

    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it("should call findOne with expected 'id' params", async () => {
    const findOneUserSpy = jest.spyOn(userService, 'findOne')

    const args: UserWhereUniqueIdInputDto = {
      id: 1
    }

    const mainArgs: Prisma.UserFindUniqueArgs = {
      where: args,
      select: {
        createdAt: true
      }
    }

    userService.findOne(mainArgs)

    expect(findOneUserSpy).toHaveBeenCalledWith(mainArgs)
  })

  it("should call findOne with expected 'username' params", async () => {
    const findOneUserSpy = jest.spyOn(userService, 'findOne')

    const args: UserWhereUniqueUsernameInputDto = {
      username: "hello"
    }

    const mainArgs: Prisma.UserFindUniqueArgs = {
      where: args,
      select: {
        createdAt: true
      }
    }

    userService.findOne(mainArgs)

    expect(findOneUserSpy).toHaveBeenCalledWith(mainArgs)
  })
});
