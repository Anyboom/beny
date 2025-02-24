import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { UserEntity } from '@/modules/user/entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  findAll(): Promise<UserEntity[]> {
    return this.prismaService.user.findMany();
  }

  findOne(id: string): Promise<UserEntity> {
    return this.prismaService.user.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  findOneByEmail(email: string): Promise<UserEntity> {
    return this.prismaService.user.findFirstOrThrow({
      where: {
        email: email,
      },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prismaService.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
  }

  remove(id: string): Promise<UserEntity> {
    return this.prismaService.user.delete({
      where: {
        id: id,
      },
    });
  }
}
