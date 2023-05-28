import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule, UserModule } from './modules';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGODB_URI,
      }),
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
