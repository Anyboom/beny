import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Country } from '@prisma/client';

@Injectable()
export class CountryService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCountryDto: CreateCountryDto): Promise<Country> {
    return this.prismaService.country.create({
      data: createCountryDto,
    });
  }

  findAll(): Promise<Country[]> {
    return this.prismaService.country.findMany();
  }

  findOne(id: string): Promise<Country> {
    return this.prismaService.country.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateCountryDto: UpdateCountryDto): Promise<Country> {
    return this.prismaService.country.update({
      where: {
        id: id,
      },
      data: updateCountryDto,
    });
  }

  remove(id: string): Promise<Country> {
    return this.prismaService.country.delete({
      where: {
        id: id,
      },
    });
  }
}
