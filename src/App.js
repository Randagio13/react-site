import React, { Component } from 'react'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import dataReducers from './reducers'
import thunk from 'redux-thunk'
const store = configureStore({
  reducer: dataReducers,
  middleware: [...getDefaultMiddleware(), thunk],
  devTools: process.env.NODE_ENV !== 'production'
})
// import logo from './logo.svg'
// import './App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    )
  }
}

export default App
