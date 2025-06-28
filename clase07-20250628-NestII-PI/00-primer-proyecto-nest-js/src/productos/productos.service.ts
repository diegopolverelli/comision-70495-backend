import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  productos:Producto[]

  constructor(){
    this.productos=[
      {
        id: 1,
        title: 'Pelota',
        descrip: 'Pelota Fútbol',
        stock: 10, 
        price: 290
      },
      {
        id: 2,
        title: 'Remera',
        descrip: 'Remera Fútbol',
        stock: 4, 
        price: 180
      },
    ]
  }

  create(createProductoDto: CreateProductoDto) {
    // validaciones
    // if(!createProductoDto.descrip || !createProductoDto.title) throw new BadRequestException("title | descrip son requeridos")
    // createProductoDto.color="negro"

    let id=1
    if(this.productos.length>0){
      id=Math.max(...this.productos.map(d=>d.id))+1
    }

    let nuevoProducto:Producto={
      id, 
      ...createProductoDto
    }

    this.productos.push(nuevoProducto)
    

    return {message:`Producto dado de alta!`, nuevoProducto};
  }

  findAll() {
    return this.productos;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
