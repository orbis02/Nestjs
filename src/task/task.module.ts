import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employeeEntity } from 'src/employee/employee.entity';
import { TaskController } from './task.controller';
import { taskEntity } from './task.entity';
import { TaskService } from './task.service';

@Module({
    imports:[TypeOrmModule.forFeature([taskEntity,employeeEntity])],
    providers: [TaskService],
    controllers: [TaskController]
  })
export class TaskModule {}
