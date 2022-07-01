import {
  Headers,
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
  Body,
  UploadedFiles,
  UseInterceptors,
  HttpVersionNotSupportedException,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/cars.dto';
import { CarInterface } from './interfaces/cars.interface';
import { of } from 'rxjs';
import { join } from 'path/posix';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  //FIND ALL CARS
  @Get('/findAll')
  getAllCars(@Query() query, @Headers() headers): Promise<CarInterface[]> {
    const { token } = headers;
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

  //UPDATE CAR FOR ID
  @Put('/updateOneForId/:id')
  updateOneCarforId(
    @Param('id') id: string,
    @Body() createCarDto: CreateCarDto,
  ): Promise<CarInterface> {
    return this.carService.updateOneCarforId(id, createCarDto);
  }

  //CREATE CAR
  @Post('/createCar')
  createCar(@Body() createCarDto: CreateCarDto): Promise<CarInterface> {
    return this.carService.createCar(createCarDto);
  }

  //Upload one file
  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          callback(null, `${uuidv4()}.jpg`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const nameOriginal = file.originalname.toLocaleLowerCase();
        // //console.log(nameOriginal);
        if (!nameOriginal.match(/(.gif|.png|.jpg|.jpeg)$/)) {
          return callback(
            new HttpVersionNotSupportedException({
              status: HttpStatus.NOT_FOUND,
              error: `El archivo tiene una extension no valida, validas: gif png jpg jpeg`,
            }),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  uploadFile(@UploadedFiles() file: Express.Multer.File) {
    return {
      succses: `Upload photo `,
    };
  }

  //Upload multiple files
  @Post('files')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          callback(null, `${uuidv4()}.jpg`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const nameOriginal = file.originalname.toLocaleLowerCase();
        if (!nameOriginal.match(/(.gif|.png|.jpg|.jpeg)$/)) {
          return callback(
            new HttpVersionNotSupportedException({
              status: HttpStatus.NOT_FOUND,
              error: `Uno de los archivos tiene una extension no valida. Validas: gif png jpg jpeg`,
            }),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    return files.map((item) => {
      return { url: item.filename };
    });
  }

  @Get('uploads/:imagename')
  findProfileImage(@Param() params, @Res() res) /* : Observable<Object>  */ {
    const { imagename } = params;

    return of(res.sendFile(join(process.cwd(), `uploads/${imagename}`)));
  }
}
