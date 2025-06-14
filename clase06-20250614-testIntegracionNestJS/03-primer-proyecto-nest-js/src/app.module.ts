import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  // nombre:string
  // edad:number
  // email:string

  // constructor(){
  //   this.nombre="Juan"
  //   this.edad=27
  //   this.email="juan@test.com"
  // }

  // saludo(){
  //   console.log("hola ", this.nombre)
  // }
}

// let persona=new AppModule()
// persona.saludo()
