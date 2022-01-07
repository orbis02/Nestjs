import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductoDto } from './dto/prodcuto.dto';
import { Producto } from './interfaces/Producto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
 constructor(private readonly productoService:ProductoService){}
//buscando el listado de productos
 @Get('/getProductos')
 async getAll(){

    return await this.productoService.getAll();
 }
 //buscado por id
 @Get('/getProducto/:id')
 async getById(@Param('id') id:string)
 {

    return  await this.productoService.getById(parseInt(id));
 }
 //creando el producto
@Post('/createProducto')
async createProducto(@Body() dto:ProductoDto):Promise<Producto>
{
  return await this.productoService.create(dto);
}
//actualizando producto
@Put('/updateProducto/:id')
async update(@Param('id') id:number, @Body() dto:ProductoDto){
    return await this.productoService.update(id,dto);
}

//funcion para elimiar producto.
@Delete('/deleteProducto/:id')
async delete(@Param('id') id:number){
    return await this.productoService.delete(id);
}


}
//Agregar comentarios
