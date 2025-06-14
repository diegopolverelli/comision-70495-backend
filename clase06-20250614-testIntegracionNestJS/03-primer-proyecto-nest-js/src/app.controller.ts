import { BadRequestException, Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { createUsuario } from './interfaces/Usuarios';


@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get("saludo")
  getHello(): string {
    // return 100
    return this.appService.getHello();
  }

  @Get("nombre")
  getNombre(@Query("name") nombre:string){

    if(!nombre) throw new BadRequestException(`Ingrese query param name`)

    return this.appService.getNombreMayuscula(nombre)
  }

  @Get("usuarios/:id")
  getUserById(@Param("id") idUsuario:number){

    return this.appService.getUserById(idUsuario)
  }

  @Post("usuarios")
  creaUsuario(@Body() usuario:createUsuario){
    // validaciones
    if(!usuario.nombre) throw new BadRequestException("nombre es requerido")

    // usuario.edad=17
    if(Object.keys(usuario).includes("edad")) throw new BadRequestException("Edad no es una propiedad valida")

    return this.appService.creaUsuario(usuario)
  }

}
