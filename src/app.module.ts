import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './cars/middleware/logger.middleware';
import { CarsController } from './cars/cars.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo/mymongodatabase'),
    CarsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// DESPUES TENGO QUE PROBARLO CON EL TOKEN
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'cars', method: RequestMethod.GET },
        'cars/findAll',
        { path: 'cars', method: RequestMethod.GET },
        'cars/findAll/name',
        { path: 'cars', method: RequestMethod.GET },
        'cars/findOneForId/(.*)',
        { path: 'cars', method: RequestMethod.GET },
        'cars/uploads/(.*)',
      )
      .forRoutes(CarsController);
  }
}

// //DESPUES TENGO QUE COMENTAR ESTO Y DESCOMENTAR LO QUE ESTA COMENTADO ARRAIBA PARA PROBARLO
// export class AppModule {}
