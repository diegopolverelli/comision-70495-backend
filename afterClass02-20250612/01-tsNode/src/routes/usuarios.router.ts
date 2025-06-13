import { Router } from 'express';
import { UsuarioInterface } from '../interfaces/usuarios';
import { getUser } from '../utils/users';
export const router=Router()

router.get('/',async(req,res)=>{

    let usuario:UsuarioInterface=await getUser()

    let usuarios:UsuarioInterface[]=[
        {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
        {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
        {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
    ]

    usuarios.push(usuario)

    res.setHeader('Content-Type','application/json')
    res.status(200).json(usuarios)
})