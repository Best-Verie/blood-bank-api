import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createAppointmentDto: CreateAppointmentDto) {
    return await this.prisma.appointment.create({
      data: {
        event: {
          connect: {
            id: createAppointmentDto.eventId,
          },
        },
        appointmentDate: createAppointmentDto.appointmentDate,
        user: {
          connect: {
            id: createAppointmentDto.userId,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.appointment.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.appointment.findUnique({
      where: { id },
    });
  }

  async findByUserId(userId: string) {
    return await this.prisma.appointment.findMany({
      where: { userId: userId },
    });
  }
  B;
  async findByEventById(eventId: string) {
    return await this.prisma.appointment.findMany({
      where: {
        eventId: eventId,
      },
    });
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    if (updateAppointmentDto.appointmentDate) {
      await this.prisma.appointment.update({
        where: { id },
        data: {
          appointmentDate: updateAppointmentDto.appointmentDate,
        },
      });
    }
    if (updateAppointmentDto.eventId) {
      await this.prisma.appointment.update({
        where: { id },
        data: {
          event: {
            connect: {
              id: updateAppointmentDto.eventId,
            },
          },
        },
      });
    }
    return;
  }

  async remove(id: string) {
    return await this.prisma.appointment.delete({
      where: { id },
    });
  }
}
