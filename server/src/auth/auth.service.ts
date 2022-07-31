import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserInfo } from './dto/user-info.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) { }

  async validateUser(username: string, password: string): Promise<UserInfo | null> {
    const user = await this.userService.findOne({
      where: {
        username
      }
    })

    if (user && user.password === password) {
      return {
        id: user.id,
        username
      } as UserInfo
    }

    return null
  }

}
