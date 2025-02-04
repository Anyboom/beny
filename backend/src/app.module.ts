import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '@/services/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CountryModule } from '@/modules/country/country.module';
import { BetModule } from '@/modules/bet/bet.module';
import { CompetitionModule } from '@/modules/competition/competition.module';
import { EventModule } from '@/modules/event/event.module';
import { ForecastModule } from '@/modules/forecast/forecast.module';
import { SportModule } from '@/modules/sport/sport.module';
import { TeamModule } from '@/modules/team/team.module';
import { UserModule } from '@/modules/user/user.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CountryModule,
    BetModule,
    CompetitionModule,
    EventModule,
    ForecastModule,
    SportModule,
    TeamModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
