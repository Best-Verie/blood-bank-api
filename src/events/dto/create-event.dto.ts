import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
  location: string;

  @IsString()
  @ApiProperty()
  hospitalId: string;

  @IsString()
  @ApiProperty()
  eventDate: string;
}
