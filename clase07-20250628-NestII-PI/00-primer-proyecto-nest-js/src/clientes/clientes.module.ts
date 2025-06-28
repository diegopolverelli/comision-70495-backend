import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { ProductosModule } from '../productos/productos.module';

@Module({
  imports:[ProductosModule],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
