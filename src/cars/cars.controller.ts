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
  HttpException,
  NotFoundException,
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
  getCarsWithName(@Query() query): Promise<CarInterface[]> {
    return this.carService.getCarsWithName(query);
  }

  //FIND CAR FOR ID
  @Get('/findOneForId/:id')
  getOneCarforId(@Param('id') id: string): Promise<CarInterface> {
    return this.carService.getOneCarforId(id);
  }

  //DELETE CAR FOR ID
  @Delete('/deleteOneForId/:id')
  deleteOneCarforId(@Param('id') id: string): Promise<CarInterface> {
    return this.carService.deleteOneCarforId(id);
  }
}
