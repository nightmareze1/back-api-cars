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
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarInterface } from './interfaces/cars.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Get()
  getAllCars(@Query() query): Promise<CarInterface[]> {
    console.log(query, 'esta es mi query');
    return this.carService.getAllCars();
  }

  @Get()
  getCarWithName(@Query() query): Promise<CarInterface[]> {
    return this.carService.getCarWithName(query);
  }
}
