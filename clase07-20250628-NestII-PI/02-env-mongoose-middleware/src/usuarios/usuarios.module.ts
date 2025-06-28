import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuarios, UsuarioSchema } from './schema/usuarios.schema';
// import { Clientes, ClienteSchema } from './schema/usuarios.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: Usuarios.name, schema: UsuarioSchema}
    ])
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
