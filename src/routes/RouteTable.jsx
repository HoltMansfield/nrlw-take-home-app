import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { BackendService } from '../backend';
import { NotFound } from './NotFound'
import { List } from './list/List'
import { Details } from './details/Details'


function RouteTable () {
  const backend = new BackendService()

  return (
    <Switch>
      {/* Default Route */}
      <Route exact path="/" render={() => <Redirect to="/list" /> } />

      <Route exact path="/list" component={() => <List backend={backend} />} />
      <Route exact path="/details/:id" component={() => <Details backend={backend} />} />

      {/* 404 route must be last */}
      <Route component={NotFound} />
    </Switch>
  )
}

export { RouteTable }
