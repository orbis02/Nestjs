import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employeeEntity } from 'src/employee/employee.entity';
import { ContactInfoController } from './contact-info.controller';
import { contactinfoEntity } from './contact-info.entity';
import { ContactInfoService } from './contact-info.service';

@Module({
  imports:[TypeOrmModule.forFeature([contactinfoEntity,employeeEntity])],
  controllers: [ContactInfoController],
  providers: [ContactInfoService]
})
export class ContactInfoModule {}
