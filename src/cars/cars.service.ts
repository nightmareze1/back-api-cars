import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarInterface } from './interfaces/cars.interface';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Cars') private carModel: Model<CarInterface>) {}

  async getAllCars(): Promise<CarInterface[]> {
    return await this.carModel.find({});
  }

  async getCarWithName(query): Promise<CarInterface[]> {
    console.log(query);
    return await this.carModel.find({ name: 'ezequiel' });
  }
}
