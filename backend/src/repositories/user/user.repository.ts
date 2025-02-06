import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { UserType } from '@/repositories/user/user.type';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<UserType[]> {
    return this.prismaService.user.findMany();
  }

  public async findByEmail(email: string): Promise<UserType | null> {
    return this.prismaService.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  public async create(userDTO: Omit<UserType, 'id'>): Promise<UserType> {
    return this.prismaService.user.create({
      data: userDTO,
    });
  }
}
