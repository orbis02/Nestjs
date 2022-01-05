import { Controller, Get,Post,Put,Delete,Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-tasks.dto';
import {TasksService} from './tasks.service';
import { Tasks} from './interfaces/Tasks';
@Controller('tasks')
export class TasksController {
    constructor(private TasksService: TasksService){}
 //decorador sirve para especificar la ruta, en caso de que sea la inicial se deja sin modificacion... 
    @Get('/getTasks')
    getTasks():  Promise<Tasks[]> {
      return this.TasksService.getTasks();

    } 

    @Get('/getTask/:taskid') 
    getTask(@Param('taskid') taskid: string) {
        return this.TasksService.getTask(taskid);
      }
    //METODO PARA INSERTAR
    @Post('/CrearTarea')
    createTasks(@Body() tasks:CreateTaskDto):Promise<Tasks>{
         return  this.TasksService.createTask(tasks);
      
    }

    //METODO PARA ACTUALIZAR 
    @Put('/UpdateTasks')
    updateTasks(@Body() tasks:CreateTaskDto,@Param('id') id: number):string{
        return 'Actualizando una tarea';
    }
    //metodo para borrar una tarea 
    @Delete('/DeleteTasks/:id')
    deleteTasks(@Param('id') id: number):string{
        console.log(id);
        return 'Metodo para borrar tarea '+id;
    }


}
