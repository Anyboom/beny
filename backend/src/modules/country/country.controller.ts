import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CountryEntity } from '@/modules/country/entities/country.entity';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiResponse({
    type: CountryEntity,
    status: 201,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCountryDto: CreateCountryDto): Promise<CountryEntity> {
    return this.countryService.create(createCountryDto);
  }

  @ApiResponse({
    type: CountryEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<CountryEntity[]> {
    return this.countryService.findAll();
  }

  @ApiResponse({
    type: CountryEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<CountryEntity> {
    return this.countryService.findOne(id);
  }

  @ApiResponse({
    type: CountryEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ): Promise<CountryEntity> {
    return this.countryService.update(id, updateCountryDto);
  }

  @ApiResponse({
    type: CountryEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<CountryEntity> {
    return this.countryService.remove(id);
  }
}
