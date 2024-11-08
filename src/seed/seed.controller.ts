import { SeedService } from './seed.service';
import { Controller, Get } from '@nestjs/common';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) { }

  @Get()
  runSeed() {
    return this.seedService.populateDB();
  };
}
