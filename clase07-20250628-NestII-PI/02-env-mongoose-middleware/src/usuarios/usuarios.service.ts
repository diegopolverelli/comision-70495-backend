import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Model } from 'mongoose';
import {  Usuarios } from './schema/usuarios.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsuariosService {

  constructor(@InjectModel(Usuarios.name) private usuariosModelo: Model<Usuarios>) {}

  async create(createUsuarioDto: CreateUsuarioDto) {

    let existe=await this.usuariosModelo.findOne({email:createUsuarioDto.email})
    if(existe) throw new BadRequestException(`Ya existe un usuario con email ${createUsuarioDto.email}`)

    return this.usuariosModelo.create(createUsuarioDto)
  }

  findAll() {
    // return `This action returns all usuarios`;
    return this.usuariosModelo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
