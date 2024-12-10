import { PassportSerializer } from '@nestjs/passport';
import { UserService } from '../../user/user.service';
import { User } from '../../user/entities/user.entity';
import { Inject } from '@nestjs/common';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err: Error, user: User) => void) {
    console.log('Inside Serializer');
    console.log('Serialized user', user);
    done(null, user);
  }

  deserializeUser(user: User, done: (err: Error, user: User) => void) {
    console.log('Inside Deserializer');
    console.log('deser user', user);
    const userDB = this.userService.findUserById(user.id);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
