import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { HospitalsModule } from './hospitals/hospitals.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [AuthModule, HospitalsModule, AppointmentsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
