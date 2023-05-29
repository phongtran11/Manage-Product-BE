import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://manage-product-fe.vercel.app', 'http://localhost:5173'],
    optionsSuccessStatus: 200,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: { exposeDefaultValues: true },
    }),
  );

  const port = process.env.PORT || 4200;

  await app.listen(port, '0.0.0.0');
}
bootstrap();
