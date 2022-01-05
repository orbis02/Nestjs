import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoDto } from './dto/prodcuto.dto';
import { ProductoEntity } from './producto.entity';
import { ProductoRepository } from './producto.repository';

@Injectable()
export class ProductoService {
    constructor(@InjectRepository(ProductoEntity) private productoRepository:ProductoRepository){}


    //funcion para buscar listados de productos. 
   async getAll(): Promise<ProductoEntity[]>{
        const list=await this.productoRepository.find();
        if(!list.length)
        {
            throw new NotFoundException({message:"lista esta vacia"});
        }
        return list;
    }
    //funcion de busqueda de producto por id..
    async getById(id:number):Promise<ProductoEntity>{
        const producto=await this.productoRepository.findOne();
        if(!producto)
        {
            throw new NotFoundException({message:"no existe"});
        }
        return producto;
    }
//funcion para buscar por un campo especifico en este caso nombre.
    async getByName(nombre:string):Promise<ProductoEntity>{
        const producto=await this.productoRepository.findOne({nombre:nombre});
        return producto;
        
    }
    //funcion para crear en este caso producto, el dto es para realizar la transferencia de informacion enviada desde el controlador.
    async create(dto:ProductoDto):Promise<any>{
  
         const producto=this.productoRepository.create(dto);
         await this.productoRepository.save(producto);
         return {message:"Producto Creado"}
    }
//funcion para actulizar producto por id.
 async update(id:number,dto:ProductoDto):Promise<any>{
   
     const producto = await this.productoRepository.findOne(id);
     dto.nombre ? producto.nombre = dto.nombre : producto.nombre = producto.nombre;
     dto.precio ? producto.precio = dto.precio : producto.precio = producto.precio;
     await this.productoRepository.save(producto);
     return { message: "Producto Actualizado" }

    }
    //funcion para eliminar productos por id..
    async delete(id:number):Promise<any>{
        const producto = await this.productoRepository.findOne(id);
        await this.productoRepository.delete(producto);
        return { message: "Producto eliminado" }
   
       }

}
