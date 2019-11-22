import React from 'react'
import { Ticket } from '../../backend'


interface DetailsViewProps {
  ticket: Ticket
}

function DetailsView ({ ticket }: DetailsViewProps) {
  return (
    <div>{`${ticket.id} ${ticket.description} ${ticket.completed ? 'Complete' : 'Not yet completed'}`}</div>
  )
}

export { DetailsView }
