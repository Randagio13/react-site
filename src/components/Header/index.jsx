import styled from 'styled-components'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import PropTypes from 'prop-types'

const Header = props => (
  <nav className={props.className}>
    <Logo text={props.logoText} />
    <Menu elements={props.menuItems} />
  </nav>
)

Header.propTypes = {
  logoText: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired
}

export default styled(Header)`
  display: flex;
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
`
