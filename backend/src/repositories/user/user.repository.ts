import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  public create(createUserData: Omit<User, 'id'>): Promise<User> {
    return this.prismaService.user.create({
      data: createUserData,
    });
  }
}
