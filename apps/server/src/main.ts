import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(ConfigService).get('PORT');

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(parseInt(port, 10) || 3000);
}
bootstrap();
