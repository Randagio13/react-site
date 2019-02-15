import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Element = styled.a`
  font-family: OpenSans;
  font-size: 14px;
  color: #9B9B9B;
  letter-spacing: 1px;
  text-align: center;
  line-height: 18px;
`

const Menu = props => {
  const { className, elements } = props
  return (
    <div className={className}>
      {elements.map((v, k) => <Element key={k}>{v}</Element>)}
    </div>
  )
}

Menu.propTypes = {
  elements: PropTypes.array.isRequired
  // elements: PropTypes.array.isRequired
}

export default styled(Menu)`
  width: 100%;
  justify-self: center;
`
