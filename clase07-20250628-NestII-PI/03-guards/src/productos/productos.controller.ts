import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, SetMetadata } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Request } from 'express';
import { AuthGuard } from '../auth/auth.guard';

@Controller('api/productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  @SetMetadata('roles', ['admin'])
  @UseGuards(AuthGuard)
  create(@Body() createProductoDto: CreateProductoDto, @Req() req:any) {

    console.log(req.user)

    return this.productosService.create(createProductoDto, req.user);
  }

  @Get()
  // @SetMetadata('codigo', 99933322)
  // @SetMetadata('color', "verde")
  @SetMetadata('roles', ['admin', "user"])
  @UseGuards(AuthGuard)  
  findAll(@Req() req: Request) {

    console.log(req.headers)
    console.log(req.query)

    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}
