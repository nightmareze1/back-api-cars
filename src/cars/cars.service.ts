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
import { PhotoInterface } from './interfaces/photos.interface';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel('Cars') private carModel: Model<CarInterface>,
    @InjectModel('Photos') private photoModel: Model<PhotoInterface>,
  ) {}

  //FIND ALL CARS
  async getAllCars(query): Promise<any> {
    const { limit, offset, sort } = query;
    const count = await this.carModel.count();
    const valuePage = count / 4;
    const pages = valuePage <= 1 ? 1 : parseInt(valuePage.toFixed());
    try {
      const results = await this.carModel
        .find({})
        .limit(limit)
        .skip(offset)
        .sort({ price: sort });
      return { results, count, pages };
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
  async getCarsWithName(query): Promise<any> {
    const { name, limit, offset, sort } = query;
    const count = await this.carModel
      .find({
        $or: [{ name: { $regex: name, $options: 'i' } }],
      })
      .limit(limit)
      .sort({ price: sort })
      .skip(offset)
      .count();
    const valuePage = count / 4;
    const pages = valuePage <= 1 ? 1 : parseInt(valuePage.toFixed());

    try {
      const results = await this.carModel
        .find({
          $or: [{ name: { $regex: name, $options: 'i' } }],
        })
        .limit(limit)
        .sort({ price: sort })
        .skip(offset);
      return { results, count, pages };
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

  //CREATE CAR
  async createCar(createCarDto: CreateCarDto): Promise<CarInterface> {
    try {
      const carCreated = await this.carModel.create(createCarDto);
      // const photoCreated = await this.photoModel.create({ name: 'dsadasd' });

      return carCreated;
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Imposible to create car`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
