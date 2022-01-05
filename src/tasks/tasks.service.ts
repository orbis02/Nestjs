import { Injectable, Param } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Tasks} from './interfaces/Tasks';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-tasks.dto';
@Injectable()
export class TasksService {

constructor(@InjectModel('Task') private taskModel:Model<Tasks>){}
async getTasks()
{
 return await this.taskModel.find();
}
async getTask(id:string)
 {
   return  await this.taskModel.findById(id);
 }
 async createTask(task:CreateTaskDto)
 {
   const newTask=new this.taskModel(task);
  return await newTask.save();
  // console.log(newTask);
   //return 'Saved';
 }

}
