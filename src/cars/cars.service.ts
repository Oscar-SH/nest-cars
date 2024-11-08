import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        { id: uuid(), brand: 'Toyota', model: 'Corolla' },
        { id: uuid(), brand: 'Honda', model: 'Civic' },
        { id: uuid(), brand: 'Jeep', model: 'Cherokee' }
    ];

    findAll() {
        return this.cars;
    };

    findOneById(id: string) {
        const car = this.cars.find((car) => car.id === id);
        if (!car) throw new NotFoundException(`Can not find id ${id}`);
        return car;
    };

    create(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model
        };

        this.cars.push(car);
        return car;
    };

    update(updateCarDto: UpdateCarDto) {
        let cardb = this.findOneById(updateCarDto.id);
        if (!cardb) throw new NotFoundException(`Can not find id ${updateCarDto.id}`);

        this.cars = this.cars.map(car => {
            if (car.id === updateCarDto.id) {
                cardb = {
                    ...cardb,
                    ...updateCarDto
                };
                return cardb;
            }
            return car;
        });

        return cardb;
    };

    delete(id: string) {
        let cardb = this.findOneById(id);
        if (!cardb) throw new NotFoundException(`Can not find id ${id}`);

        this.cars = this.cars.filter(car => car.id !== id);

        return 'Success';

    };

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    };
}