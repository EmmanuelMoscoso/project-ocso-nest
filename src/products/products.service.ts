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
  private products: CreateProductDto[] = [
    {
    productId: uuid(),
    productName: "Sabritas Normal",
    price: 29,
    countSeal: 3,
    provider: uuid(),
    },
    {
      productId: uuid(),
      productName: "Coca Cola 2 Lts",
      price: 40,
      countSeal: 2,
      provider: uuid(),
      },
      {
        productId: uuid(),
        productName: "Agua Ciel 1.5 Lts",
        price: 24,
        countSeal: 0,
        provider: uuid(),
        },
  ];

  create(createProductDto: CreateProductDto) {
    const product= this.productRepository.save(createProductDto);
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product = this.productRepository.findOneBy({
      productId: id,
    })
    if (!product) throw new NotFoundException();
    return product;
  }

  findByProvider(id: string) {
    const productsFound = this.products.filter((product) => product.provider === id)
    if (productsFound.length == 0) throw new NotFoundException();
    return productsFound;
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
