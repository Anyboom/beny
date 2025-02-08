import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Country } from '@prisma/client';

@Injectable()
export class CountryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<Country[]> {
    return this.prismaService.country.findMany();
  }
}
