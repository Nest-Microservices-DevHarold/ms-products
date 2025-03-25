import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import { PaginationDto } from 'src/common/dto';

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

  async findAll(paginationDto: PaginationDto) {
  const { page, limit } = paginationDto;

  // Si no se envían `page` ni `limit`, retornar todos los productos
  if (!page || !limit) {
    return {
      data: await this.prisma.product.findMany(),
      meta: {
        total: await this.prisma.product.count(),
        page: null,
        lastPage: null,
      },
    };
  }

  const totalPages = await this.prisma.product.count();
  const lastPage = Math.ceil(totalPages / limit);

  return {
    data: await this.prisma.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
    }),
    meta: {
      total: totalPages,
      page: page,
      lastPage: lastPage,
    },
  };
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
