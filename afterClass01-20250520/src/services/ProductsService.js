import { ProductsDAO } from "../dao/ProductsDAO.js"

class ProductsService{
    constructor(DAO){
        this.productsDAO=DAO
    }

    async getProducts(){
        return await this.productsDAO.get()
    }

    async createProduct(product){
        return await this.productsDAO.add(product)
    }
}

export const productsService=new ProductsService(ProductsDAO)