import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { contactInfoDto } from './dto/contact-info.dto';
import { ContactInfo } from './interfaces/ContactInfo';

@Controller('contact-info')
export class ContactInfoController {
    constructor(private readonly  contactInfoService:ContactInfoService){}
    @Get('/getContactos')
    async getAll(){
   
       return await this.contactInfoService.getAll();
    }
    //buscado por id
    @Get('/getContacto/:id')
    async getById(@Param('id') id:string)
    {
       return  await this.contactInfoService.getById(parseInt(id));
    }
    //creando contacto del empleado
   @Post('/createContacto')
   async createEmpleado(@Body() dto:contactInfoDto):Promise<ContactInfo>
   {
     return await this.contactInfoService.create(dto);
   }
   //actualizando Contactos del Empleado 
   @Put('/updateContacto/:id')
   async update(@Param('id') id:number, @Body() dto:contactInfoDto){
       return await this.contactInfoService.update(id,dto);
   }
   
   //funcion para elimiar contacto.
   @Delete('/deleteContacto/:id')
   async delete(@Param('id') id:number){
       return await this.contactInfoService.delete(id);
   }
}
//Agregar comentarios