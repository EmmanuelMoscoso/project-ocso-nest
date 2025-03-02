import { Injectable } from '@nestjs/common';
import { CreateRegioDto } from './dto/create-regio.dto';
import { UpdateRegioDto } from './dto/update-regio.dto';

@Injectable()
export class RegiosService {
  create(createRegioDto: CreateRegioDto) {
    return 'This action adds a new regio';
  }

  findAll() {
    return `This action returns all regios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} regio`;
  }

  update(id: number, updateRegioDto: UpdateRegioDto) {
    return `This action updates a #${id} regio`;
  }

  remove(id: number) {
    return `This action removes a #${id} regio`;
  }
}
