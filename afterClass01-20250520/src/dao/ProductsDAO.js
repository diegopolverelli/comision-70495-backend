import { productModel } from "./models/products.model.js";

export class ProductsDAO{
    static async get(){
        return await productModel.find().lean()
    }

    static async add(product){
        return await productModel.create(product)
    }
}