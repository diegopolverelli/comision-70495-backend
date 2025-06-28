import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true, 
      secret: "secret123",
      signOptions:{
        expiresIn: "1h"
      }
    }),
    UsuariosModule, 
    ProductosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
