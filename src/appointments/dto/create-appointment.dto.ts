import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  @ApiProperty()
  userId: string;

  @IsString()
  @ApiProperty()
  eventId: string;

  @IsString()
  @ApiProperty()
  appointmentDate: string;
}
