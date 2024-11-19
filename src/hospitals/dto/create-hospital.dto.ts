import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateHospitalDto {
  @ApiProperty() 
  @IsString()
  name: string;

  @ApiProperty() 
  @IsEmail()
  email: string;

  @IsString()
  @ApiProperty() 
  password: string;

  @IsString()
  @ApiProperty() 
  district: string;

  @IsString()
  @ApiProperty() 
  sector: string;

  @IsString()
  @ApiProperty() 
  description: string;
}
