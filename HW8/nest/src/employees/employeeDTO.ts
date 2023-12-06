import { IsString, IsOptional } from 'class-validator';

export class employeeDTO {
    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @IsString()
    @IsOptional()
    middleName: string;

    @IsString()
    @IsOptional()
    position: string;
}