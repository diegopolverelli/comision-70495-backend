import mongoose from "mongoose";

export const productModel=mongoose.model(
    "products",
    new mongoose.Schema(
        {
            title: String, 
            price: Number, 
            stock:{
                type: Number, default: 0
            }, 
            code:{
                type: String, unique:true
            }
        },
        {
            timestamps: true, 
            // collection: "productos2021",
            // strict: false
        }
    )
)