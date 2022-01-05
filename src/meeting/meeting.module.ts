import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employeeEntity } from 'src/employee/employee.entity';
import { MeetingController } from './meeting.controller';
import { meetingEntity } from './meeting.entity';
import { MeetingService } from './meeting.service';

@Module({
  imports:[TypeOrmModule.forFeature([meetingEntity,employeeEntity])],
  controllers: [MeetingController],
  providers: [MeetingService]
})
export class MeetingModule {}
