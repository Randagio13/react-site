import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import HomeContainer from '../containers/HomeContainer'

const Routes = () => {
  const menuItems = [{label: 'lorem'}, {label: 'ipsum'}, {label: 'dolor'}]
  const text = 'adrubale'
  return (
    <React.Fragment>
      <Header logoText={text} menuItems={menuItems} />
      <Switch>
        <Route path='/' exact component={HomeContainer} />
        <Route component={() => <div>No Match</div>} />
      </Switch>
    </React.Fragment>
  )
}

export default Routes
