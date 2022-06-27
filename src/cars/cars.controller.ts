import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Patch,
  Param,
  Query,
  Res,
  Req,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarInterface } from './interfaces/cars.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  //FIND ALL CARS
  @Get('/findAll')
  getAllCars(@Query() query): Promise<CarInterface[]> {
    return this.carService.getAllCars(query);
  }

  //FIND CAR FOR NAME
  @Get('/findAll/name')
  getCarWithName(@Query() query): Promise<CarInterface[]> {
    return this.carService.getCarWithName(query);
  }
}
