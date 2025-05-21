import { Router } from 'express';
import passport from 'passport';
import jwt from "jsonwebtoken"
import { UsersDTO } from '../dto/UsersDTO.js';
import { config } from '../config/config.js';
export const router=Router()

router.post(
    "/registro",
    // paso 3 
    passport.authenticate("registro", {session:false}),
    (req, res)=>{
        // si passport.authenticate se ejecuta de manera correcta, deja
        // en la request (es un middleware) los datos del usuario en 
        // req.user

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({message:`Registro exitoso...!!!`, nuevoUsuario: req.user});
    }
)

router.post(
    "/login", 
    passport.authenticate("login", {session:false}),
    (req, res)=>{

        console.log(req.user)
        console.log(Object.keys(req.user))
        let token=jwt.sign(req.user, config.SECRET, {expiresIn: "1h"})

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({message:`Login exitoso`, usuarioLoguedo: new UsersDTO(req.user), token });
    }
)