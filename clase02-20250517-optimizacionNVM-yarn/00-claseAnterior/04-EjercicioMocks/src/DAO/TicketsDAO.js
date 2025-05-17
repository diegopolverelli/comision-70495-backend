import { modeloDatos } from "../models/datos.model.js";

export class TicketsDAO{
    static async get(){
        return await modeloDatos.find().lean()
    }
}