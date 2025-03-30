import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
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
      data: createProductDto,
    });

    return product;
  }

  async findAll(paginationDto: PaginationDto) {
    const { page = 1, limit = 10 } = paginationDto;

    //Example 1
    // Si no se envían `page` ni `limit`, retornar todos los productos

    /** if (!page || !limit) {
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
    */

    //Example 2
    const totalProducts = await this.prisma.product.count({ where: { avalible: true } });
    const lastPage = Math.ceil(totalProducts / limit);

    const existingPage = await this.prisma.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        avalible: true,
      },
    });
    return {
      data: existingPage.length > 0 ? existingPage : 'No products found',
      meta: {
        page: page,
        total: totalProducts,
        lastPage: lastPage,
      },
    };
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findFirst({
      where: {
        id: id,
        avalible: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with id #${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    // Aqui puedo separar, el id de la data a modificar
    const { id: _, ...data } = updateProductDto;

    if (!updateProductDto) {
      throw new BadRequestException('No data to update');
    }

    await this.findOne(id);

    return this.prisma.product.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    const product = await this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        avalible: false,
      },
    });
    return product;
  }
}
