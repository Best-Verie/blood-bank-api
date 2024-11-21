import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export enum AppointmentStatus {
  APPROVED = 'APPROVED',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
}

export class CreateAppointmentDto {
  @IsString()
  @ApiProperty()
  userId: string;

  @IsString()
  @ApiProperty()
  eventId: string;

  @IsString()
  @ApiProperty({ enum: AppointmentStatus })
  status: AppointmentStatus;

  @IsString()
  @ApiProperty()
  appointmentDate: string;
}
