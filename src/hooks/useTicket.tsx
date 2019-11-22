import { useState, useEffect } from 'react'
import { BackendService, Ticket } from '../backend'


/*
  It's very weird to pass backend as a param here but I would never use a JS class to begin with
  If I was actually building this backend.tsx would be either a custom hook or multiple custom hooks
  and I'd merely be pulling it in here

  communication layer hook (http | graph) => custom hook (ie: useTicket) => component
  Please see the example folder for how I would actually architect something like this
*/
export const useTicket = (ticketId: string | undefined, backend: BackendService) => {
  const [ticket, setTicket] = useState<Ticket>()

  useEffect(() => {
    const sub = backend.ticket(Number(ticketId)).subscribe(ts => {
      setTicket(ts)
    })
    return () => sub.unsubscribe()
  }, [ticketId])

  return {
    ticket
  }
}
