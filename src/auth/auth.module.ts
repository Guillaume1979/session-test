import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { SessionSerializer } from './strategy/session-serializer';

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule.register({
      session: true,
    }),
  ],
  providers: [
    AuthService,
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
    LocalStrategy,
    SessionSerializer,
  ],
})
export class AuthModule {}
