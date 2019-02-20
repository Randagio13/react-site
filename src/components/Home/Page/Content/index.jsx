import styled from 'styled-components'

import React, { Component } from 'react'

const ContentStyled = styled.div.attrs(({ fullscreen }) => ({
  style: {
    width: fullscreen && '100%'
  }
}))`
  width: 90%;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  position: relative;
  top: -250px;
  background: #ffffff;
  min-height: 188px;
  border-radius: 12px 12px 0 0;
`

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullscreen: false
    }
  }
  componentDidMount () {
    this.windowScroll()
  }
  windowScroll () {
    window.addEventListener('scroll', () => {
      const y = window.scrollY
      switch (true) {
        case y >= 515:
          this.setState({
            fullscreen: true
          })
          break
        default:
          this.setState({
            fullscreen: false
          })
          break
      }
    })
  }
  render () {
    const { children } = this.props
    const { fullscreen } = this.state
    return (
      <ContentStyled fullscreen={fullscreen}>
        {children}
      </ContentStyled>
    )
  }
}

export default Content
