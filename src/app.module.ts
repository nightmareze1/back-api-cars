import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//"mongodb://mongo/mymongodatabase"

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo/mymongodatabase')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
