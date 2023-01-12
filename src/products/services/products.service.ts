import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private repository: Repository<Product>,
  ) {}
  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const product = await this.repository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(data: CreateProductDto) {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async update(id: number, changes: UpdateProductDto) {
    const entity = await this.repository.findOne(id);
    this.repository.merge(entity, changes);
    return this.repository.save(entity);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
