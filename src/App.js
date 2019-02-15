import React, { Component } from 'react'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
// import logo from './logo.svg'
// import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}

export default App
