import { EntityRepository, Repository } from "typeorm";
import { taskEntity } from "./task.entity";
@EntityRepository(taskEntity)
export class taskRepository extends Repository<taskEntity>{

}
//Agregar comentarios
