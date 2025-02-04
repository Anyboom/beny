import { Controller, Get } from '@nestjs/common';
import { CountryType } from '@/repositories/country/country.type';
import { CountryService } from '@/modules/country/country.service';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  public findAll(): Promise<CountryType[]> {
    return this.countryService.findAll();
  }
}
