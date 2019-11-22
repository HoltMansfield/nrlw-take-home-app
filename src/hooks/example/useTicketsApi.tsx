import { useState, useEffect } from 'react'
import { useApi } from './useApi'
import { Ticket } from '../../backend'


/*
  useApi would be in this case a wrapper around someting like fetch or axios,
*/
export const useTicketsApi = () => {
  const { get } = useApi()

  const getTicketById = async (ticketId: number): Promise<Ticket> => {
    return await get(`tickets/${ticketId}`)
  }

  return {
    getTicketById
  }
}
