import { Router } from 'express';
import HeroesManager from '../manager/HeroesManager.js'
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

    req.logger.info("Ejecutando ruta home")

    res.status(200).render('home')
})

router.get('/heroes',(req,res, next)=>{


    let heroes
    try {
        heroes=heroesManager.getHeroes()
    } catch (error) {
        req.logger.error(error.message)
        // console.log(`Error al leer heroes: ${error.message}`)        
        return next(error)
    }

    res.status(200).render('heroes', {
        heroes
    })
})