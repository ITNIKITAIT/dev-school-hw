import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { createProductDTO } from './ProductDTO'
import { ProductException } from 'src/custom.expections';

const prisma = new PrismaClient()

@Controller('products')
export class ProductsController {
    @Post() 
    async createProduct(@Body(new ValidationPipe()) body: createProductDTO) {
        try {
            const NewProduct = body;
            await prisma.products.create({
                data: NewProduct
                })
            return `${NewProduct.name} was successfully added`
        }
        catch(e) {
            throw new ProductException();
        }
    }
}
