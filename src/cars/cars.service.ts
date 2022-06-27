import { HttpCode, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarInterface } from './interfaces/cars.interface';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Cars') private carModel: Model<CarInterface>) {}

  async getAllCars(query): Promise<CarInterface[]> {
    const { limit } = query;
    console.log(limit, 'limit');

    return await this.carModel.find({}).limit(limit);
  }

  async getCarWithName(query): Promise<CarInterface[]> {
    console.log(query);
    const { name } = query;
    return await this.carModel.find({ name: name });
  }
}
