import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  controllers: [AuthController],
  imports: [PassportModule],
  providers: [AuthService, UserService, LocalStrategy],
})
export class AuthModule {}
