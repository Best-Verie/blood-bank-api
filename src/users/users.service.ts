import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { Role } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.user.findMany({});
  }
  async findByAllRole(role: Role) {
    return await this.prisma.user.findMany({
      where: { role: role },
    });
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.address) {
      await this.prisma.user.update({
        where: { id },
        data: {
          address: updateUserDto.address,
        },
      });
    }
    if (updateUserDto.bloodGroup) {
      await this.prisma.user.update({
        where: { id },
        data: {
          address: updateUserDto.bloodGroup,
        },
      });
    }
    if (updateUserDto.email) {
      await this.prisma.user.update({
        where: { id },
        data: {
          address: updateUserDto.email,
        },
      });
    }
    if (updateUserDto.firstName) {
      await this.prisma.user.update({
        where: { id },
        data: {
          address: updateUserDto.firstName,
        },
      });
    }
    if (updateUserDto.lastName) {
      await this.prisma.user.update({
        where: { id },
        data: {
          address: updateUserDto.lastName,
        },
      });
    }
    if (updateUserDto.gender) {
      await this.prisma.user.update({
        where: { id },
        data: {
          address: updateUserDto.gender,
        },
      });
    }
    if (updateUserDto.bloodGroup) {
      await this.prisma.user.update({
        where: { id },
        data: {
          address: updateUserDto.bloodGroup,
        },
      });
    }
    return;
  }

  async remove(id: string) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
