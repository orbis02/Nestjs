import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { Task } from './interfaces/task';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService:TaskService){}

    @Get('/getTasks')
    async getAll(){
   
       return await this.taskService.getAll();
    }
    //buscado tarea por id
    @Get('/getTask/:id')
    async getById(@Param(':id') id:string)
    {
       return  await this.taskService.getById(parseInt(id));
    }
    //creando el tarea
   @Post('/createTask')
   async createEmpleado(@Body() dto:TaskDto):Promise<Task>
   {
     return await this.taskService.create(dto);
   }
   //actualizando tarea
   @Put('/updateTask/:id')
   async update(@Param(':id') id:number, @Body() dto:TaskDto){
       return await this.taskService.update(id,dto);
   }
   
   //funcion para elimiar tarea.
   @Delete('/deleteTask/:id')
   async delete(@Param(':id') id:number){
       return await this.taskService.delete(id);
   }

}
//Agregar comentarios
