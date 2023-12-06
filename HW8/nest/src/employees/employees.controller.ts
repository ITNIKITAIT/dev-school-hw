import { Controller, Patch, Param, Body, BadRequestException, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { employeeDTO } from './employeeDTO'
import { CheckIdPipe } from 'src/validation.pipes';

const prisma = new PrismaClient()

@Controller('employees')
export class EmployeesController {
    @Patch(':employee_id')
    async updateEmployee(@Body(new ValidationPipe()) body: employeeDTO, @Param('employee_id', ParseIntPipe, CheckIdPipe) employee_id: number) {
        try {
            const UpdatedEmployee = body;
            await prisma.employees.update({
                where: {
                    id: employee_id
                  },
                  data: UpdatedEmployee
                })
            return UpdatedEmployee;
        }
        catch(e) {
            throw new BadRequestException("Something bad happened")
        }    
    }
}
