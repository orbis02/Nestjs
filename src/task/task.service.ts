import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { employeeEntity } from 'src/employee/employee.entity';
import { employeeRepository } from 'src/employee/employee.repository';
import { TaskDto } from './dto/task.dto';
import { taskEntity } from './task.entity';
import { taskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(taskEntity) private taskRepository:taskRepository,
    @InjectRepository(employeeEntity) private employeeRepository:employeeRepository
    ){}

       //funcion para buscar listados de reuniones. 
       async getAll(): Promise<taskEntity[]>{
        const list=await this.taskRepository.find();
        if(!list.length)
        {
            throw new NotFoundException({message:"lista esta vacia"});
        }
        return list;
    }

     //funcion de busqueda de reuniones por id..
     async getById(id:number):Promise<taskEntity>{
        const task=await this.taskRepository.findOne(id);
        if(!task)
        {
            throw new NotFoundException({message:"task no existe"});
        }
        return task;
    }   
    

       //funcion para crear en este caso Empleado, el dto es para realizar la transferencia de informacion enviada desde el controlador.
       async create(dto:TaskDto):Promise<any>{
        const employee= await this.employeeRepository.findOne(dto.employeeId);
        const newTask=new taskEntity();
        newTask.nombre=dto.nombre;
        newTask.employee=employee;
       
        await this.taskRepository.save(newTask);
        return {message:"task Creado"}
   }
//funcion para actulizar Empleado por id.
async update(id:number,dto:TaskDto):Promise<any>{
  
    const task = await this.taskRepository.findOne(id);
    dto.nombre ? task.nombre = dto.nombre : task.nombre = task.nombre;   
    await this.taskRepository.save(task);
    return { message: "task Actualizado" }

   }
   //funcion para eliminar Empleados por id..
   async delete(id:number):Promise<any>{
       const task = await this.taskRepository.findOne(id);
       await this.taskRepository.delete(task);
       return { message: "task eliminado" }
  
      }
}
