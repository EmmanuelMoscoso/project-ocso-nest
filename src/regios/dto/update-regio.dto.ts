import { PartialType } from '@nestjs/mapped-types';
import { CreateRegioDto } from './create-regio.dto';

export class UpdateRegioDto extends PartialType(CreateRegioDto) {}
