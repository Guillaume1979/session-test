import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(session({
    name: 'testSessionID',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
      secure: false,
      httpOnly: true
    }
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  const PORT = 3000;
  await app.listen(process.env.PORT ?? PORT);
  Logger.log(`Server started on port : ${PORT}`);
}

bootstrap();
