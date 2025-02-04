import { Injectable } from '@nestjs/common';
import { UserRepository } from '@/repositories/user/user.repository';
import { UserType } from '@/repositories/user/user.type';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  findAll(): Promise<UserType[]> {
    return this.userRepository.findAll();
  }
}
