import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { CountryRepository } from '@/repositories/country/country.repository';

@Module({
  providers: [CountryService, CountryRepository],
  controllers: [CountryController],
})
export class CountryModule {}
