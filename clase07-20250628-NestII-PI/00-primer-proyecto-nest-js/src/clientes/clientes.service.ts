import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { ProductosService } from '../productos/productos.service';

@Injectable()
export class ClientesService {
  clientes:Cliente[]

  constructor(
    private productosService: ProductosService
  ){
    this.clientes=[
      {
        id:1, nombre:"Juan", email:"juan@test.com"
      },
      {
        id:2, nombre:"Lola", email:"lola@test.com"
      },
    ]
  }
  create(createClienteDto: CreateClienteDto) {
    return 'This action adds a new cliente';
  }

  findAll() {
    return `This action returns all clientes`;
  }

  findClientesProductos(){
    return {
      clientes:this.clientes,
      productos:this.productosService.findAll()
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
