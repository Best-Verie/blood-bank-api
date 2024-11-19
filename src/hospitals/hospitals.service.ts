import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Injectable()
export class HospitalsService {
  constructor(private readonly prisma: PrismaService) {}

  // Fetch all hospitals
  async findAll() {
    return this.prisma.hospital.findMany();
  }

  // Fetch a hospital by ID
  async findOne(id: string) {
    return this.prisma.hospital.findUnique({
      where: { id },
    });
  }

  // Create a new hospital and return the created data
  async create(data: CreateHospitalDto) {
    const newHospital = await this.prisma.hospital.create({
      data,
    });
    return newHospital;
  }

  // Update an existing hospital and return the updated data
  async update(id: string, data: UpdateHospitalDto) {
    const updatedHospital = await this.prisma.hospital.update({
      where: { id },
      data,
    });
    return updatedHospital;
  }

  // Delete a hospital by ID and return the deleted record
  async remove(id: string) {
    const deletedHospital = await this.prisma.hospital.delete({
      where: { id },
    });
    return deletedHospital;
  }
}
