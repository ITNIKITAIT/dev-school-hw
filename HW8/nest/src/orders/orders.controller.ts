import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { DeleteOrderExpections } from 'src/custom.expections';
import { CheckIdPipe } from 'src/validation.pipes';

const prisma = new PrismaClient()

@Controller('orders')
export class OrdersController {
    @Delete(':order_id')
    async deleteOrder(@Param('order_id', ParseIntPipe, CheckIdPipe) order_id: number) {
        if ((await prisma.orders.findMany({where: {id: order_id}})).length == 0) {
            throw new DeleteOrderExpections()
        }
        await prisma.orders.delete({
            where: {
                id: order_id
            }
        }) 
        return 'Order was deleted'
    }
}