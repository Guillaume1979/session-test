import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const PORT = 3000;
  await app.listen(process.env.PORT ?? PORT);
  Logger.log(`Server started on port : ${PORT}`);
}

bootstrap();
