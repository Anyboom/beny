import { Injectable } from '@nestjs/common';
import { CountryRepository } from '@/repositories/country/country.repository';
import { CountryType } from '@/repositories/country/country.type';

@Injectable()
export class CountryService {
  constructor(private countryRepository: CountryRepository) {}

  public findAll(): Promise<CountryType[]> {
    return this.countryRepository.findAll();
  }
}
