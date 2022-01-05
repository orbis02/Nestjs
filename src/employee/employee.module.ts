import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { employeeEntity } from './employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([employeeEntity])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports:[EmployeeService]
})
export class EmployeeModule {}
