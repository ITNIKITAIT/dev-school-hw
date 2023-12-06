import { PipeTransform, Injectable, ArgumentMetadata, HttpException, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { NotFoundIdException } from './custom.expections';
const prisma = new PrismaClient()

@Injectable()
export class CheckIdPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    if ((await prisma.employees.findMany({ where: {id: value}})).length !== 0) {
        return value;
    }
    throw new NotFoundIdException()
  }
}