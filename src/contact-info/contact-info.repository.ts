import { EntityRepository, Repository } from "typeorm";
import { contactinfoEntity } from "./contact-info.entity";

@EntityRepository(contactinfoEntity)
export class contactInfoRespository extends Repository<contactinfoEntity>{

}