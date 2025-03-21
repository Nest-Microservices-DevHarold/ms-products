import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  
  private readonly logger = new Logger('ProductsService');
  
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    const product = this.prisma.product.create({
      data: createProductDto
    })

    return product;
  }

  findAll() {
    const getAllProducts = this.prisma.product.findMany();
    return getAllProducts;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
