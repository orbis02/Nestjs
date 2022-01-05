import { employeeEntity } from "src/employee/employee.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('meeting')
export class meetingEntity{
@PrimaryGeneratedColumn()
id:number;
@Column()
zoomUrl:string;
@ManyToMany(()=>employeeEntity,employee=>employee.meetings)
attendees:employeeEntity[];

}