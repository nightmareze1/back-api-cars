import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarInterface } from './interfaces/cars.interface';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Cars') private carModel: Model<CarInterface>) {}

  //FIND ALL CARS
  async getAllCars(query): Promise<CarInterface[]> {
    const { limit, offset } = query;
    console.log(limit, 'limit', offset, 'offset');

    return await this.carModel.find({}).limit(limit).skip(offset);
  }

  //FIND CAR FOR NAME
  async getCarsWithName(query): Promise<CarInterface[]> {
    console.log(query);
    const { name, limit, offset } = query;
    return await this.carModel.find({ name: name }).limit(limit).skip(offset);
  }
  //FIND CAR FOR ID
  async getOneCarforId(id): Promise<CarInterface> {
    try {
      const found = await this.carModel.findById(id);
      return found;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: `car with id ${id} does not exist`,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
