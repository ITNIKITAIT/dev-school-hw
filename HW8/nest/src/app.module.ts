import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { ProductsController } from './products/products.controller';
import { CustomerOrdersController } from './customers-orders/customers-orders.controller';
import { EmployeesController } from './employees/employees.controller';

@Module({
  imports: [],
  controllers: [AppController, OrdersController, ProductsController, CustomerOrdersController, EmployeesController],
  providers: [AppService],
})
export class AppModule {}
