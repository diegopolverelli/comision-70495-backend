import passport from "passport"
import local from "passport-local"
import passportJWT from "passport-jwt"
import bcrypt from "bcrypt"
import { userModel } from "../dao/models/users.model.js"
import { config } from "./config.js"

export const initPassport=()=>{
    // paso 1
    passport.use("registro", 
        new local.Strategy(
            {
                passReqToCallback:true, 
                // usernameField: "email"
            },
            async(req, username, password, done)=>{
                try {
                    let {email, first_name, last_name}=req.body
                    if(!email || !first_name || !last_name){
                        console.log(`faltan datos...`)
                        return done(null, false)
                    }

                    password=bcrypt.hashSync(password, 10)
                    let nuevoUsuario=await userModel.create({username, password, email, first_name, last_name})
                    return done(null, nuevoUsuario)                    
                } catch (error) {
                    console.log(error.message)
                    return done(error)
                }
            }
        )
    )

    passport.use("login", 
        new local.Strategy(
            {},
            async(username, password, done)=>{
                try {
                    let usuario=await userModel.findOne({username}).lean() // deshidrata objeto de mongoose (le quita properties ocultas)
                    if(!usuario){
                        return done(null, false)
                    }

                    if(!bcrypt.compareSync(password, usuario.password)){
                        return done(null, false)
                    }

                    return done(null, usuario)                    
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("jwt",    // current
        new passportJWT.Strategy(
            {
                secretOrKey: config.SECRET, 
                jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
            },
            async(contenidoToken, done)=>{
                try {
                    return done(null, contenidoToken)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    // paso 1' SOLO SI USO sessions (express-sessions)
    // passport.serializeUser()
    // passport.deserializeUser()
}