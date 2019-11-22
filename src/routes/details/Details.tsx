import React from 'react'
import { useParams } from 'react-router-dom'
import { BackendService } from '../../backend'
import { useTicket } from '../../hooks/useTicket'
import { DetailsView } from './DetailsView'



interface DetailsProps {
  backend: BackendService
}

interface RouterParams {
  id?: string | undefined
}

function Details ({ backend }: DetailsProps) {
  const params: RouterParams = useParams()
  const { ticket } = useTicket(params.id, backend)

  if(!ticket) {
    return 'Loading...'
  }

  return <DetailsView ticket={ticket} />
}

export { Details }
