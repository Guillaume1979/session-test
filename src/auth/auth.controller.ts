import { Controller, Get, Post, Req, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: any) {
    return 'Hello World!';
  }

  @Get()
  getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    console.log(session.id);
    session.toto = 'coucou'
    return session
  }
}
