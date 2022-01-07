import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { EmployeeDto } from './dto/employee.dto';
import { employeeEntity } from './employee.entity';
import { employeeRepository } from './employee.repository';

type user = employeeEntity;

@Injectable()
export class EmployeeService {
    constructor( @InjectRepository(employeeEntity) private employeeRepository:employeeRepository){}

    //funcion para buscar listados de empleados. 
    async getAll(): Promise<employeeEntity[]>{
        const list=await this.employeeRepository.find({relations:["tasks","meetings","contactInfo"]});
        if(!list.length)
        {
            throw new NotFoundException({message:"lista esta vacia"});
        }
        return list;
    }

     //funcion de busqueda empleado por id..
     async getById(id:number):Promise<employeeEntity>{
        // console.log(id);
        const empleado=await this.employeeRepository.findOne({id},{relations:["tasks","meetings","contactInfo"]});
        if(!empleado)
        {
            throw new NotFoundException({message:"no existe"});
        }
        return empleado;
    }   
    
    //funcion para buscar por un campo especifico en este caso nombre.
    async getByName(nombre:string):Promise<employeeEntity>{
      
        const empleado=await this.employeeRepository.findOne({nombre:nombre});
        return empleado;
        
    }
    async getUsernae(Username:string):Promise<user>{
        const username=await this.employeeRepository.findOne({username:Username});
        return username;
        
    }
       //funcion para crear en este caso Empleado, el dto es para realizar la transferencia de informacion enviada desde el controlador.
       async create(dto:EmployeeDto):Promise<any>{
  
        const Empleado=this.employeeRepository.create(dto);
        await this.employeeRepository.save(Empleado);
        return {message:"Empleado Creado"}
   }
//funcion para actulizar Empleado por id.
async update(id:number,dto:EmployeeDto):Promise<any>{
  
    const empleado = await this.employeeRepository.findOne(id);
    dto.nombre ? empleado.nombre = dto.nombre : empleado.nombre = empleado.nombre;  
    await this.employeeRepository.save(empleado);
    return { message: "Empleado Actualizado" }

   }
   //funcion para eliminar Empleados por id..
   async delete(id:number):Promise<any>{
       const empleado = await this.employeeRepository.findOne(id);
       await this.employeeRepository.delete(empleado);
       return { message: "Empleado eliminado" }
  
      }

}
