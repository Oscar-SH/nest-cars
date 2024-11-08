import moment from 'moment';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BrandsService {
    private brands: Brand[] = [
        {
            id: uuid(),
            name: 'Toyota',
            created_at: new Date(),
            updated_at: new Date()
        }
    ];

    findAll() {
        return this.brands;
    };

    findOne(id: string) {
        const brand = this.brands.find(brand => brand.id === id);

        if (!brand) throw new NotFoundException(`Brand ${id} not find`);

        return brand;
    };

    create(createBrandDto: CreateBrandDto) {
        const brand: Brand = {
            id: uuid(),
            name: createBrandDto.name,
            created_at: new Date(),
            updated_at: new Date()
        };
        this.brands.push(brand);

        return brand;
    };

    update(id: string, updateBrandDto: UpdateBrandDto) {
        let branddb = this.findOne(id);

        this.brands = this.brands.map(brand => {
            if (brand.id === id) {
                branddb = {
                    ...branddb,
                    ...updateBrandDto
                };
                return branddb;
            }
            return brand;
        });

        return branddb;

    };

    remove(id: string) {
        this.findOne(id);
        this.brands = this.brands.filter(brand => brand.id !== id);

        return true;
    };

    fillBrandsWithSeedData(brands: Brand[]) {
        this.brands = brands;
    };
}
