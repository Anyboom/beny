import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  findOne(id: string): Promise<User> {
    return this.prismaService.user.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.prismaService.user.findFirstOrThrow({
      where: {
        email: email,
      },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prismaService.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
  }

  remove(id: string): Promise<User> {
    return this.prismaService.user.delete({
      where: {
        id: id,
      },
    });
  }
}
