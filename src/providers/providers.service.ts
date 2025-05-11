import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from './entities/provider.entity';
import { Repository, Like} from 'typeorm';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectRepository(Provider)
    private providerRepository: Repository<Provider>,
  ){}
  create(createProviderDto: CreateProviderDto) {
    return this.providerRepository.save(createProviderDto);
  }

  findAll() {
    return this.providerRepository.find({relations: {
      products: true,
    }})
  }

  findByName(name: string) {
    const provider = this.providerRepository.find({
      where: {
        providerName: Like(`%${name}%`),
      }
    })
    if (!provider) throw new NotFoundException();
    return provider;
  }

  findOne(id: string) {
    return this.providerRepository.findOne({
      where : {
        providerId: id
      },
      relations: {
        products: true,
      }
    })
  }

  async update(id: string, updateProviderDto: UpdateProviderDto) {
    const provider = await this.providerRepository.preload({
      providerId: id,
      ...updateProviderDto,
    })
    if (!provider) throw new NotFoundException(`Provider with id ${id} not found`);
    return this.providerRepository.save(provider);
  }

  remove(id: string) {
    this.findOne(id);
    this.providerRepository.delete({
      providerId: id, 
    }) 
    return {
      message: `Proveedor con id ${id} eliminado`,
    }
  }

}
