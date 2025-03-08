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
import { plainToInstance } from 'class-transformer';

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
  async create(
    @Body() createCountryDto: CreateCountryDto,
  ): Promise<CountryEntity> {
    return plainToInstance(
      CountryEntity,
      await this.countryService.create(createCountryDto),
    );
  }

  @ApiResponse({
    type: CountryEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<CountryEntity[]> {
    return plainToInstance(CountryEntity, await this.countryService.findAll());
  }

  @ApiResponse({
    type: CountryEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CountryEntity> {
    return plainToInstance(
      CountryEntity,
      await this.countryService.findOne(id),
    );
  }

  @ApiResponse({
    type: CountryEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ): Promise<CountryEntity> {
    return plainToInstance(
      CountryEntity,
      await this.countryService.update(id, updateCountryDto),
    );
  }

  @ApiResponse({
    type: CountryEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CountryEntity> {
    return plainToInstance(CountryEntity, await this.countryService.remove(id));
  }
}
