import { Injectable } from '@nestjs/common';
import { UserRepository } from '@/repositories/user/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
