import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe());


  const option = new DocumentBuilder()
  .setTitle('losmasterapi')
  .setDescription('api')
  .setVersion('4.4.0')
  .build()
  const document = SwaggerModule.createDocument(app,option);
  SwaggerModule.setup('api',app,document);
  await app.listen(8085);
}
bootstrap();
