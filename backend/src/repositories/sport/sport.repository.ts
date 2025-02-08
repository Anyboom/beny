import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Sport } from '@prisma/client';

@Injectable()
export class SportRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<Sport[]> {
    return this.prismaService.sport.findMany();
  }
}
