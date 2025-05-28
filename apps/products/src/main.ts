/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PRODUCTS_PACKAGE_NAME } from '../../../types/proto/products'
import path from 'path';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: PRODUCTS_PACKAGE_NAME,
      protoPath: path.join(__dirname, "proto/products.proto"),
    },
  })
  await app.listen();
  Logger.log('Application is running on grpc channel');
}

bootstrap();
