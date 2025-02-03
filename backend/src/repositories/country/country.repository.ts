import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { CountryType } from '@/repositories/country/country.type';

@Injectable()
export class CountryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async getList(): Promise<CountryType[]> {
    return this.prismaService.country.findMany();
  }
}
