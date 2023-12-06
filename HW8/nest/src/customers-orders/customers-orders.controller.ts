import { Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { CheckIdPipe } from 'src/validation.pipes';

const prisma = new PrismaClient()

@Controller('customers/:customer_id/orders')
export class CustomerOrdersController {
    @Get()
    async getAll(@Param('customer_id', ParseIntPipe, CheckIdPipe) customer_id: number) {
        const orders = await prisma.orders.findMany({ where: {customer_id: customer_id}})
        return orders;
    }
}
