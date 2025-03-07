import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaClientErrorFilter } from '@/filters/prisma-client-error.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: true },
  );

  const httpAdapter = app.get(HttpAdapterHost);
  const reflector = app.get(Reflector);
  const serializer = new ClassSerializerInterceptor(reflector);

  app.useGlobalInterceptors(serializer);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const prismaExceptionFilter = new PrismaClientErrorFilter(httpAdapter);

  app.useGlobalFilters(prismaExceptionFilter);

  const config = new DocumentBuilder()
    .setTitle('Сервис для ставок')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(3000, '0.0.0.0');
}

bootstrap();
