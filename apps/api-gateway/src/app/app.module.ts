import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'products',
        transport: Transport.GRPC,
        options: {
          package: 'products',
          protoPath: join(__dirname, 'proto/products.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
