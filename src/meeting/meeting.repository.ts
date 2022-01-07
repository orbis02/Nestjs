import { EntityRepository, Repository } from "typeorm";
import { meetingEntity } from "./meeting.entity";
@EntityRepository(meetingEntity)
export class meetingRepository extends Repository<meetingEntity>{

}
//Agregar comentarios