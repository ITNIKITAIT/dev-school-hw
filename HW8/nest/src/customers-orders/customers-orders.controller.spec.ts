import { Test, TestingModule } from '@nestjs/testing';
import { CustomersOrdersController } from './customers-orders.controller';

describe('CustomersOrdersController', () => {
  let controller: CustomersOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersOrdersController],
    }).compile();

    controller = module.get<CustomersOrdersController>(CustomersOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
