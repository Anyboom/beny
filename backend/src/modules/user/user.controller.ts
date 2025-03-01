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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { UserEntity } from '@/modules/user/entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({
    type: UserEntity,
    status: 201,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return plainToInstance(UserEntity, this.userService.create(createUserDto));
  }

  @ApiResponse({
    type: UserEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<UserEntity[]> {
    return plainToInstance(UserEntity, await this.userService.findAll());
  }

  @ApiResponse({
    type: UserEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): UserEntity {
    return plainToInstance(UserEntity, this.userService.findOne(id));
  }

  @ApiResponse({
    type: UserEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): UserEntity {
    return plainToInstance(
      UserEntity,
      this.userService.update(id, updateUserDto),
    );
  }

  @ApiResponse({
    type: UserEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): UserEntity {
    return plainToInstance(UserEntity, this.userService.remove(id));
  }
}
