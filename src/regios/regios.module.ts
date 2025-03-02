import { Module } from '@nestjs/common';
import { RegiosService } from './regios.service';
import { RegiosController } from './regios.controller';

@Module({
  controllers: [RegiosController],
  providers: [RegiosService],
})
export class RegiosModule {}
