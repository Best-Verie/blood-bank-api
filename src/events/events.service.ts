import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { connect } from 'http2';

@Injectable()
export class EventsService {
  constructor(readonly prisma: PrismaService) {}
  async create(createEventDto: CreateEventDto) {
    return await this.prisma.donationEvent.create({
      data: {
        title: createEventDto.title,
        description: createEventDto.description,
        eventDate: createEventDto.description,
        location: createEventDto.location,
        hospital: {
          connect: {
            id: createEventDto.hospitalId,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.donationEvent.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.donationEvent.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    if (updateEventDto.title) {
      return await this.prisma.donationEvent.update({
        where: { id },
        data: {
          title: updateEventDto.title,
        },
      });
    }
    if (updateEventDto.description) {
      return await this.prisma.donationEvent.update({
        where: { id },
        data: {
          description: updateEventDto.description,
        },
      });
    }
    if (updateEventDto.eventDate) {
      return await this.prisma.donationEvent.update({
        where: { id },
        data: {
          eventDate: updateEventDto.eventDate,
        },
      });
    }
    if (updateEventDto.location) {
      return await this.prisma.donationEvent.update({
        where: { id },
        data: {
          location: updateEventDto.location,
        },
      });
    }
    if (updateEventDto.hospitalId) {
      return await this.prisma.donationEvent.update({
        where: { id },
        data: {
          hospital: {
            connect: {
              id: updateEventDto.hospitalId,
            },
          },
        },
      });
    }
  }

  async remove(id: string) {
    return await this.prisma.donationEvent.delete({ where: { id } });
  }

  async getAppointmentsByEventId(eventId: string) {
    return await this.prisma.appointment.findMany({
      where: {
        eventId: eventId, // Match the eventId
      },
      include: {
        user: true, // Include related user details, optional
      },
    });
  }
}
