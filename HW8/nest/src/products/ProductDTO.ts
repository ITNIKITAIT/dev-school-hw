import { Category } from '@prisma/client'
import { IsString, IsInt } from 'class-validator';

export class createProductDTO {
    @IsString()
    name: string;

    category: Category;

    @IsInt()
    amount: number;

    @IsInt()
    price: number;
}