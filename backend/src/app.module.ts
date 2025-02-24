import { Module } from '@nestjs/common';
import { PrismaModule } from '@/services/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@/modules/auth/auth.module';
import { BetModule } from '@/modules/bet/bet.module';
import { CompetitionModule } from '@/modules/competition/competition.module';
import { CountryModule } from '@/modules/country/country.module';
import { EventModule } from '@/modules/event/event.module';
import { ForecastModule } from '@/modules/forecast/forecast.module';
import { SportModule } from '@/modules/sport/sport.module';
import { TeamModule } from '@/modules/team/team.module';
import { UserModule } from '@/modules/user/user.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    BetModule,
    CompetitionModule,
    CountryModule,
    EventModule,
    ForecastModule,
    SportModule,
    TeamModule,
    UserModule,
  ],
})
export class AppModule {}
