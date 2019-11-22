import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BackendService, Ticket } from '../../backend'


interface ListProps {
  backend: BackendService
}

function List ({ backend }: ListProps) {
  const [tickets, setTickets] = useState<Ticket[]>()

  useEffect(() => {
    const sub = backend.tickets().subscribe(ts => {
      setTickets(ts)
    })
    return () => sub.unsubscribe()
  }, [])

  return (
    <div>
      <h2>Tickets</h2>
      {tickets ? (
        <ul>
          {tickets.map(t => (
            <li>
              <Link to={`/details/${t.id}`}>
                Ticket: {t.id}, {t.description}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  )
}

export { List }
