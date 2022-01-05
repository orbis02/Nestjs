import { employeeEntity } from "src/employee/employee.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class taskEntity{
@PrimaryGeneratedColumn()
id:number;
@Column()
nombre:string;
@ManyToOne(()=>employeeEntity,employee=>employee.tasks,{onDelete:'SET NULL'} )
employee:employeeEntity;

}