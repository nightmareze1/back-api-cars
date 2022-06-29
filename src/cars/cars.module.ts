import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarSchema } from './schemas/car.schema';
import { PhotoSchema } from './schemas/photos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cars', schema: CarSchema },
      { name: 'Photos', schema: PhotoSchema },
    ]),
  ],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
