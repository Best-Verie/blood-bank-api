import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('hospitals')
export class HospitalsController {
  constructor(private readonly hospitalsService: HospitalsService) {}

 

  @Get()
  findAll() {
    return this.hospitalsService.findAll();
  }
  @Post()
  @ApiBody({type: CreateHospitalDto})
  @ApiOperation({ summary: 'create a new hospital' })

  create(@Body() createHospitalDto: CreateHospitalDto) {
    return this.hospitalsService.create(createHospitalDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospitalsService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({type:UpdateHospitalDto})
  update(@Param('id') id: string, @Body() updateHospitalDto: UpdateHospitalDto) {
    return this.hospitalsService.update(id, updateHospitalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospitalsService.remove(id);
  }
}
