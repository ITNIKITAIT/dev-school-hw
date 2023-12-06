import { HttpException, HttpStatus } from '@nestjs/common';

export class ProductException extends HttpException {
    constructor() {
      super("Something bad happened, check the correctness of the category type", HttpStatus.BAD_REQUEST);
    }
  }

export class DeleteOrderExpections extends HttpException {
    constructor() {
        super("This order wasn't found", HttpStatus.NOT_FOUND);
    }
}

export class NotFoundIdException extends HttpException {
  constructor() {
      super("This id doesn't exist", HttpStatus.NOT_FOUND);
  }
}