import { EntityRepository, Repository } from "typeorm";
import { employeeEntity } from "./employee.entity";
@EntityRepository(employeeEntity)
export class employeeRepository extends Repository<employeeEntity>{

}
//Agregar comentarios