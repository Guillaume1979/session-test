import { Inject, Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  validateUser(username: string, password: string) {
    console.log('Inside validateUser in authService');
    const userDB = this.userService.findUser(username);
    if (userDB && userDB.password === password) {
      console.log('userDB in validateUser method in authService', userDB);
      const { password, ...userWithoutPassword } = userDB;
      return userWithoutPassword as User;
    }
    Logger.error('Validation failed !');
    return null;
  }
}
