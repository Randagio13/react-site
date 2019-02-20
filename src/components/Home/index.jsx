import React from 'react'
import Hero from './Hero'
import cover from '../../images/cover.jpg'
import Page from '../../containers/PageContainer'
import styled from 'styled-components'

const ModalBackground = styled.div.attrs(({ isOpen }) => ({
  style: {
    opacity: isOpen ? 1 : 0
  }
}))`
  width: 100%;
  height: 100vh;
  background: #4A4A4A;
  position: fixed;
  top: 0;
  transition: all 0.5s;
  overflow: hidden;
`

const Home = (props) => {
  return (
    <React.Fragment>
      <Hero src={cover} />
      <Page />
      <ModalBackground isOpen={props.isOpen} />
    </React.Fragment>
  )
}

export default Home
