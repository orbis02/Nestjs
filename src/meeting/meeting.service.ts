import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { meetingDto } from './dto/meeting.dto';
import { meetingRepository } from './meeting.repository';
import { meetingEntity } from './meeting.entity';
import { employeeEntity } from 'src/employee/employee.entity';
import { employeeRepository } from 'src/employee/employee.repository';

@Injectable()
export class MeetingService {
    constructor(@InjectRepository(meetingEntity) private meetingRepository:meetingRepository,
    @InjectRepository(employeeEntity) public employeeRepository:employeeRepository){}

     //funcion para buscar listados de reuniones. 
     async getAll(): Promise<meetingEntity[]>{
        const list=await this.meetingRepository.find();
        if(!list.length)
        {
            throw new NotFoundException({message:"lista esta vacia"});
        }
        return list;
    }

     //funcion de busqueda de reuniones por id..
     async getById(id:number):Promise<meetingEntity>{
        const meeting=await this.meetingRepository.findOne(id);
        if(!meeting)
        {
            throw new NotFoundException({message:" Meeting no existe"});
        }
        return meeting;
    }   
    

       //funcion para crear en este caso Empleado, el dto es para realizar la transferencia de informacion enviada desde el controlador.
       async create(dto:meetingDto):Promise<any>{

           const meeting = new meetingEntity();
           meeting.zoomUrl = dto.zoomUrl;
           meeting.attendees = await this.employeeRepository.findByIds(dto.attendees);
           await this.meetingRepository.save(meeting);
           return { message: "Meeting Creado" }
   }
//funcion para actulizar Empleado por id.
async update(id:number,dto:meetingDto):Promise<any>{
  
    const meeting = await this.meetingRepository.findOne(id);
    dto.zoomUrl ? meeting.zoomUrl = dto.zoomUrl : meeting.zoomUrl = meeting.zoomUrl;  
    await this.meetingRepository.save(meeting);
    return { message: "Meeting Actualizado" }

   }
   //funcion para eliminar Empleados por id..
   async delete(id:number):Promise<any>{
       const meeting = await this.meetingRepository.findOne(id);
       await this.meetingRepository.delete(meeting);
       return { message: "Meeting eliminado" }
  
      }
}
