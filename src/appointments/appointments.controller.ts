import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  async findAll() {
    return await this.appointmentsService.findAll();
  }

  @Post()
  @ApiBody({ type: CreateAppointmentDto })
  async create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return await this.appointmentsService.create(createAppointmentDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.appointmentsService.findOne(id);
  }

  @Get('/by-user-id/:id')
  async findByUserId(@Param('id') userId: string) {
    return await this.appointmentsService.findByUserId(userId);
  }

  @Get('/by-event-id/:id')
  async findByEventId(@Param('id') eventId: string) {
    return await this.appointmentsService.findByEventById(eventId);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateAppointmentDto })
  async update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return await this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.appointmentsService.remove(id);
  }
}
