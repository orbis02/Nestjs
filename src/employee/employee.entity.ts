import { count } from "console";
import { contactinfoEntity } from "src/contact-info/contact-info.entity";
import { meetingEntity } from "src/meeting/meeting.entity";
import { taskEntity } from "src/task/task.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee')
export class employeeEntity{
@PrimaryGeneratedColumn()
id:number;

@Column()
nombre:string;

@ManyToOne(()=>employeeEntity,employee=>employee.directReports,{onDelete:'SET NULL'})
manager:employeeEntity;

@OneToMany(()=>employeeEntity,employee=>employee.manager)
directReports:employeeEntity[];

@OneToOne(()=>contactinfoEntity, contactInfo=>contactInfo.employee,{onDelete:'CASCADE'})
contactInfo:contactinfoEntity;

@OneToMany(()=>taskEntity, tasks=>tasks.employee)
tasks:taskEntity[]
@ManyToMany(()=>meetingEntity,(meeting)=>meeting.attendees)
@JoinTable()
meetings:meetingEntity[];
@Column()
username:string;
@Column()
password:string;
}