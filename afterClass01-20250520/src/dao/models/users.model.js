import mongoose from "mongoose";
export const userModel=mongoose.model(
    "users", 
    new mongoose.Schema(
        {
            username: {
                type: String, unique: true
            }, 
            password: String,
            first_name: String, 
            last_name: String, 
            email: {
                type: String, unique: true
            }, 
            role: {
                type: String, default: "user"
            }
        },
        {
            timestamps:true
        }
    )
)