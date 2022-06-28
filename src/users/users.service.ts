import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { UserInterface } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private userModel: Model<UsersService>) {}

  //FIND ALL USERS
  async getAllUsers(query): Promise<any[]> {
    const { limit, offset } = query;

    try {
      return await this.userModel.find({}).limit(limit).skip(offset);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Users not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  //FIND USER FOR NAME
  async getUsersWithName(query): Promise<any[]> {
    const { name, limit, offset } = query;

    try {
      return await this.userModel
        .find({
          $or: [{ name: { $regex: name, $options: 'i' } }],
        })
        .limit(limit)
        .skip(offset);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Users not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  //FIND USER FOR ID
  async getOneUserforId(id: string): Promise<any> {
    try {
      const found = await this.userModel.findById(id);
      return found;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `User with id ${id} does not exist`,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  //DELETE CAR FOR ID
  async deleteOneUserforId(id: string): Promise<any> {
    try {
      const found = await this.userModel.findByIdAndRemove(id);
      return found;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `User with id ${id} does not exist`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  //UPDATE USER FOR ID
  async updateOneUserforId(
    id: string,
    userToUpdate: CreateUserDto,
  ): Promise<any> {
    try {
      return await this.userModel.findByIdAndUpdate(id, userToUpdate);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `User with id ${id} does not exist`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  //CREATE USER
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    let { username, password, email } = createUserDto;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    console.log(password);
    try {
      const found = await this.userModel.findOne({ email: email });
      if (found) {
        return {
          thisUserIsRegistered: 'This user already exists',
        };
      } else if (!found) {
        const userCreated = await this.userModel.create({
          username,
          password,
          email,
        });
        const { username: user, email: mail, _id: id } = userCreated;
        return { user, mail, id };
      }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Imposible to create user`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
