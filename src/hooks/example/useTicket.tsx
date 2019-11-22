import { useState, useEffect } from 'react'
import { useTicketsApi } from './useTicketsApi'
import { Ticket } from '../../backend'


export const useTicket = (ticketId: number) => {
  const [ticket, setTicket] = useState<Ticket>()
  const { getTicketById } = useTicketsApi()

  const fetchTicket = async (ticketId: number) => {
    const ticket = await getTicketById(ticketId)
    setTicket(ticket)
  }

  useEffect(() => {
    fetchTicket(ticketId)
  }, [ticketId])

  return {
    ticket
  }
}
