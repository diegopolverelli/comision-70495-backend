import { Injectable, NotFoundException } from '@nestjs/common';
import { createUsuario, Usuario } from './interfaces/Usuarios';

@Injectable()
export class AppService {

  usuarios:Usuario[]
  nombre:string

  constructor(){
    // this.nombre=nombre
    this.usuarios=[
      {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
      {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
      {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
    ]
  }


  getHello(): string {
    return 'Hello World!';
  }

  getName(): string {
    return 'Mariana';
  }

  getNombreMayuscula(nombre:string): string {
    // nombre=false
    return nombre.toUpperCase();
  }

  getUsers(){
    return this.usuarios
  }

  getUserById(id:number){
    console.log(id)
    let usuario=this.usuarios.find(u=>u.id==id)
    if(!usuario) throw new NotFoundException(`No existen usuarios con id ${id}`)

    return usuario
  }

  creaUsuario(usuario:createUsuario):Usuario{
    let id=1
    if(this.usuarios.length>0){
      id=Math.max(...this.usuarios.map(d=>d.id))+1
    }

    let nuevoUsuario:Usuario={
      id, 
      ...usuario, 
      // colorPelo:"negro"
    }

    this.usuarios.push(nuevoUsuario)

    return nuevoUsuario
    
  }
}
