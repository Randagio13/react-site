import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'

const Routes = () => {
  const menuItems = [{label: 'lorem'}, {label: 'ipsum'}, {label: 'dolor'}]
  const text = 'adrubale'
  return (
    <React.Fragment>
      <Header logoText={text} menuItems={menuItems} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route component={() => <div>No Match</div>} />
      </Switch>
    </React.Fragment>
  )
}

export default Routes
