import styled from 'styled-components'
import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'
import PropTypes from 'prop-types'

const Nav = styled.nav`
  display: flex;
  opacity: ${props => props.opacity}
  flex-flow: row nowrap;
  height: 60px
  background: #FFFFFF;
  font-family: OpenSans;
  font-size: 14px;
  color: #9B9B9B;
  letter-spacing: 1px;
  text-align: center;
  line-height: 18px;
  font-family: Helvetica;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  line-height: 18px;
  position: fixed;
  width: 100vw;
  margin: -60px 0;
  transition: all 0.5s
`

class Header extends Component {
  constructor (props) {
    super(props)
    // this.windowScroll = this.windowScroll.bind(this)
    this.state = {
      opacity: 1
    }
  }
  componentDidMount () {
    this.windowScroll()
  }
  shouldComponentUpdate (nextProps, nextState) {
    return nextState.opacity !== this.state.opacity
  }
  windowScroll () {
    window.addEventListener('scroll', () => {
      const y = window.scrollY
      switch (true) {
        case y >= 450:
          this.setState({
            opacity: 0
          })
          break
        default:
          this.setState({
            opacity: 1
          })
          break
      }
    })
  }
  render () {
    const { logoText, menuItems } = this.props
    const { opacity } = this.state
    return (
      <Nav opacity={opacity}>
        <Logo text={logoText} />
        <Menu elements={menuItems} />
      </Nav>
    )
  }
}

Header.propTypes = {
  logoText: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired
}

export default Header
