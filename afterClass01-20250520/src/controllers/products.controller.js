import { productsService } from "../services/ProductsService.js"

export const getProducts=async(req, res, next)=>{
    try {
        let productos=await productsService.getProducts()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({productos});
    } catch (error) {
        return next(error)
    }
}

export const createProduct=async(req, res, next)=>{
    let {title, price, stock, code}=req.body

    if (!title || !code){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`title / code son requeridos`})
    }

    // faltan validaciones... a gusto del alumno...!!!

    try {
        let nuevoProducto=await productsService.createProduct( {title, price, stock, code})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({message:`Producto creado con éxito`, nuevoProducto});
    } catch (error) {
        return next(error)        
    }
}