import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/products.controller.js';
import passport from 'passport';
export const router=Router()

router.get('/', getProducts)

router.post(
    "/",
    passport.authenticate("jwt", {session:false}), 
    createProduct
)