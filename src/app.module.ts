import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { HospitalsModule } from './hospitals/hospitals.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, HospitalsModule, AppointmentsModule, EventsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
