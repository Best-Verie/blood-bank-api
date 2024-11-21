import { IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsString()
  hospital: string;

  @IsString()
  hospitalId: string;

  @IsString()
  eventDate: string;
}
