import { Router } from 'express';
import { getTickets, ticketMock } from '../controllers/tickets.controller.js';
export const router=Router()

router.get('/', getTickets)
router.get("/mocks", ticketMock)