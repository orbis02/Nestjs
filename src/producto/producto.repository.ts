import { EntityRepository, Repository } from "typeorm";
import { ProductoEntity } from "./producto.entity";
@EntityRepository(ProductoEntity)
export class ProductoRepository extends Repository<ProductoEntity>{

}