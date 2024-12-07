import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, password: string) {
    console.log('Inside validateUser in authService');
    const userDB = await this.userService.findUser(username);
    if (userDB && userDB.password === password) {
      console.log(userDB);
      const { password, ...userWithoutPassword } = userDB;
      return userWithoutPassword as User;
    }
    Logger.error('Validation failed !');
    return null;
  }
}
