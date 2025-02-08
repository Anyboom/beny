import { Controller, Get } from '@nestjs/common';
import { CountryService } from '@/modules/country/country.service';
import { Country } from '@prisma/client';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  public findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }
}
