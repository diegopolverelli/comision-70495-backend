import { TicketsDAO } from "../DAO/TicketsDAO.js"

class TicketService{
    constructor(DAO){
        this.ticketDAO=DAO
    }

    async getTickets(){
        return await this.ticketDAO.get()
    }
}

export const ticketService=new TicketService(TicketsDAO)
// ticketService.getTickets()