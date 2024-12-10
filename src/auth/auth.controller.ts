import { Controller, Get, Post, Req, Session, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard, LocalAuthGuard } from './guard/local.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: any) {
    return 'Hello World!';
  }

  @Get('')
  getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    console.log(session.id);
    session.toto = 'coucou';
    return session;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('status')
  async getAuthStatus(@Req() req: Request) {
    console.log('status', req.user);
    return req.user;
  }
}
