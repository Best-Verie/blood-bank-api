// auth/dto/register.dto.ts
import { BloodGroup, Gender, Role } from '@prisma/client';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  gender: Gender;

  @IsNotEmpty()
  bloodGroup: BloodGroup;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  role: Role;
}

