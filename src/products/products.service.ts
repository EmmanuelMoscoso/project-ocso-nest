import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  create(createProductDto: CreateProductDto) {
    const product= this.productRepository.save(createProductDto);
    return product;
  }

  findAll() {
    return this.productRepository.find({
      relations: ['provider'],
    });
  }

  findOne(id: string) {
    const product = this.productRepository.findOne({
      where: {
        productId: id,
      },
      relations: ['provider']
    })
    if (!product) throw new NotFoundException();
    return product;
  }

  findByProvider(id: string) {
    this.productRepository.findBy({
      provider: {
        providerId: id, // arreglar a futuro
      }
    })
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productToUpdate = await this.productRepository.preload({
      productId: id,
      ...updateProductDto,
    })
    if (!productToUpdate) throw new NotFoundException();
    this.productRepository.save(productToUpdate)
    return productToUpdate;
  }

  remove(id: string) {
    this.findOne(id);
    this.productRepository.delete({
      productId: id,
    })
    return {
      message: `Objeto con id ${id} eliminado`
    }
  }

}
