import { BrandsService } from './brands.service';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    constructor(private readonly brandsService: BrandsService) { }

    @Get()
    findAll() {
        return this.brandsService.findAll();
    };

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: string) {
        return this.brandsService.findOne(id);
    };

    @Post()
    create(@Body() createBrandDto: CreateBrandDto) {
        return this.brandsService.create(createBrandDto);
    };

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: string, @Body() updateBrandDto: UpdateBrandDto) {
        return this.brandsService.update(id, updateBrandDto);
    };

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: string) {
        return this.brandsService.remove(id);
    };
}
