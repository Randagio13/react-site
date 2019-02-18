import React from 'react'
import Hero from './Hero'
import cover from '../../images/cover.jpg'
import Page from './Page'

const Home = () => {
  return (
    <React.Fragment>
      <Hero src={cover} />
      <Page />
    </React.Fragment>
  )
}

export default Home
