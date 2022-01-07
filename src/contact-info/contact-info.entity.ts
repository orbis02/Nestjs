
import { employeeEntity } from "src/employee/employee.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('contactinfo')
export class contactinfoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    telefono: string;
    @Column()
    email: string;
    @OneToOne(() => employeeEntity,employee=>employee.contactInfo)
    @JoinColumn()
    employee: employeeEntity;
}
//Agregar comentarios