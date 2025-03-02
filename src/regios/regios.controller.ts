import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegiosService } from './regios.service';
import { CreateRegioDto } from './dto/create-regio.dto';
import { UpdateRegioDto } from './dto/update-regio.dto';

@Controller('regios')
export class RegiosController {
  constructor(private readonly regiosService: RegiosService) {}

  @Post()
  create(@Body() createRegioDto: CreateRegioDto) {
    return this.regiosService.create(createRegioDto);
  }

  @Get()
  findAll() {
    return this.regiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regiosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegioDto: UpdateRegioDto) {
    return this.regiosService.update(+id, updateRegioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regiosService.remove(+id);
  }
}
