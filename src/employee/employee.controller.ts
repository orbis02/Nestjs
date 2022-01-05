import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeDto } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './interfaces/Employee';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService:EmployeeService){}
    //buscando el listado de Empleados
 @Get('/getEmpleados')
 async getAll(){

    return await this.employeeService.getAll();
 }
 //buscado por id
 @Get('/getEmpleado/:id')
 async getById(@Param('id') id:string)
 {  
     console.log(id);
     // return  await this.employeeService.getById(id);
 }
 //creando el Empleado
@Post('/createEmpleado')
async createEmpleado(@Body() dto:EmployeeDto):Promise<Employee>
{
  return await this.employeeService.create(dto);
}
//actualizando Empleado
@Put('/updateEmpleado/:id')
async update(@Param('id') id:number, @Body() dto:EmployeeDto){
    return await this.employeeService.update(id,dto);
}

//funcion para elimiar empleado.
@Delete('/deleteEmpleado/:id')
async delete(@Param('id') id:number){
    return await this.employeeService.delete(id);
}

}
