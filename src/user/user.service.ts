import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

export const dbUsers: User[] = [
  {
    username: 'guitou',
    password: 'coucou',
    id: 1,
    uuid: '11d35c13-ad1d-4cba-8adc-8c9508b4edf5',
  },
];

@Injectable()
export class UserService {
  findUser(username: string) {
    const userDB = dbUsers.find((user) => user.username === username);
    if (!userDB) {
      throw new NotFoundException('User Not Found');
    }
    return userDB;
  }
}
