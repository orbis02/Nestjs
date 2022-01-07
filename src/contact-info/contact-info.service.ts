import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { employeeEntity } from 'src/employee/employee.entity';
import { employeeRepository } from 'src/employee/employee.repository';
import { contactinfoEntity } from './contact-info.entity';
import { contactInfoRespository } from './contact-info.repository';
import { contactInfoDto } from './dto/contact-info.dto';

@Injectable()
export class ContactInfoService {
    constructor(@InjectRepository(contactinfoEntity)private contactInfoRespository: contactInfoRespository ,
                @InjectRepository(employeeEntity) private employeeRepository:employeeRepository) {}

     //funcion para buscar listados de contactos. 
     async getAll(): Promise<contactinfoEntity[]>{
        const list=await this.contactInfoRespository.find();
        if(!list.length)
        {
            throw new NotFoundException({message:"lista esta vacia"});
        }
        return list;
    }

     //funcion de busqueda empleado por id..
     async getById(id:number):Promise<contactinfoEntity>{
        const empleado=await this.contactInfoRespository.findOne();
        if(!empleado)
        {
            throw new NotFoundException({message:"no existe"});
        }
        return empleado;
    }   
    

       //funcion para crear en este caso Empleado, el dto es para realizar la transferencia de informacion enviada desde el controlador.
       async create(dto:contactInfoDto):Promise<any>{
  

        const employee= await this.employeeRepository.findOne(dto.employeeId);
        const newContact=new contactinfoEntity();
        newContact.telefono=dto.telefono;
        newContact.email=dto.email;
        newContact.employee=employee;
        await this.contactInfoRespository.save(newContact);
        return {message:"Cotacto  Creado"}
   }
//funcion para actulizar Empleado por id.
async update(id:number,dto:contactInfoDto):Promise<any>{
  
    const empleado = await this.contactInfoRespository.findOne(id);
    dto.telefono ? empleado.telefono = dto.telefono : empleado.telefono = empleado.telefono;  
    dto.email ? empleado.email = dto.email : empleado.email = empleado.email; 
    await this.contactInfoRespository.save(empleado);
    return { message: "Contacto del Empleado Actualizado" }

   }
   //funcion para eliminar Empleados por id..
   async delete(id:number):Promise<any>{
       const empleado = await this.contactInfoRespository.findOne(id);
       await this.contactInfoRespository.delete(empleado);
       return { message: "Empleado eliminado" }
  
      }

}

//Agregar comentarios
