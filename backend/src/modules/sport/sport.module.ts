import { Module } from '@nestjs/common';
import { SportService } from './sport.service';
import { SportController } from './sport.controller';
import { SportRepository } from '@/repositories/sport/sport.repository';

@Module({
  controllers: [SportController],
  providers: [SportService, SportRepository],
})
export class SportModule {}
