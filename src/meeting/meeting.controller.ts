import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { meetingDto } from './dto/meeting.dto';
import { Meeting } from './interfaces/Meeting';
import { MeetingService } from './meeting.service';

@Controller('meeting')
export class MeetingController {
    constructor(private readonly meetingService:MeetingService){}

     //buscando el listado de Empleados
 @Get('/getMeetings')
 async getAll(){

    return await this.meetingService.getAll();
 }
 //buscado por id
 @Get('/getMeeting/:id')
 async getById(@Param(':id') id:string)
 {
    return  await this.meetingService.getById(parseInt(id));
 }
 //creando el Empleado
@Post('/createMeeting')
async createEmpleado(@Body() dto:meetingDto):Promise<Meeting>
{
  return await this.meetingService.create(dto);
}
//actualizando Empleado
@Put('/updateMeeting/:id')
async update(@Param(':id') id:number, @Body() dto:meetingDto){
    return await this.meetingService.update(id,dto);
}

//funcion para elimiar empleado.
@Delete('/deleteMeeting/:id')
async delete(@Param(':id') id:number){
    return await this.meetingService.delete(id);
}
}
