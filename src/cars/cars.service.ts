import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/cars.dto';
import { CarInterface } from './interfaces/cars.interface';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Cars') private carModel: Model<CarInterface>) {}

  //FIND ALL CARS
  async getAllCars(query): Promise<CarInterface[]> {
    const { limit, offset } = query;

    try {
      return await this.carModel.find({}).limit(limit).skip(offset);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Cars not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  //FIND CAR FOR NAME
  async getCarsWithName(query): Promise<CarInterface[]> {
    const { name, limit, offset } = query;

    try {
      return await this.carModel
        .find({
          $or: [{ name: { $regex: name, $options: 'i' } }],
        })
        .limit(limit)
        .skip(offset);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Cars not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  //FIND CAR FOR ID
  async getOneCarforId(id: string): Promise<CarInterface> {
    try {
      const found = await this.carModel.findById(id);
      return found;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Car with id ${id} does not exist`,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  //DELETE CAR FOR ID
  async deleteOneCarforId(id: string): Promise<CarInterface> {
    try {
      const found = await this.carModel.findByIdAndRemove(id);
      return found;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Car with id ${id} does not exist`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  //UPDATE CAR FOR ID
  async updateOneCarforId(
    id: string,
    carToUpdate: CreateCarDto,
  ): Promise<CarInterface> {
    try {
      return await this.carModel.findByIdAndUpdate(id, carToUpdate);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Car with id ${id} does not exist`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
