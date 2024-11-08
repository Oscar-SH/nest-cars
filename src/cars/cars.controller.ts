import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    };

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this.carsService.findOneById(id);
    };

    @Post()
    @UsePipes(ValidationPipe)
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    };

    @Patch()
    updateCar(@Body() updateCarDto: UpdateCarDto) {
        return this.carsService.update(updateCarDto);
    };

    @Delete(':id')
    deleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this.carsService.delete(id);
    };
};
