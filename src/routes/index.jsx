import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/Header'

const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' exact component={() => <div>Home</div>} />
        <Route component={() => <div>No Match</div>} />
      </Switch>
    </React.Fragment>
  )
}

export default Routes
