import { Injectable } from '@nestjs/common';
import { CountryRepository } from '@/repositories/country/country.repository';
import { Country } from '@prisma/client';

@Injectable()
export class CountryService {
  constructor(private countryRepository: CountryRepository) {}

  public findAll(): Promise<Country[]> {
    return this.countryRepository.findAll();
  }
}
