import { generaTicket } from "../mocks/ticket.mock.js";
import { modeloDatos } from "../models/datos.model.js";
import { ticketService } from "../services/ticket.service.js"

export const getTickets=async(req, res, next)=>{
    try {
        let tickets=await ticketService.getTickets()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({tickets});
    } catch (error) {
        // res.status(500).send("error")
        return next(error)
    }
}

export const ticketMock=async(req, res, next)=>{
    let {cantidad=1, db}=req.query

    

    let tickets=[]
    for(let i=0; i<cantidad; i++){
        tickets.push(generaTicket())
    }

    if(db){
        try {
            // console.log(adfasdfadsf)
            tickets=await modeloDatos.insertMany(tickets)
        } catch (error) {
            return next(error)
        }
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({tickets});
}