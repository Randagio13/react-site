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
  text-transform: uppercase;
  padding: 0 20px 0 20px;
  cursor: pointer;
`

const Menu = props => {
  const { className, elements } = props
  return (
    <div className={className}>
      {elements.map((v, k) => <Element onClick={v.onClick} key={k}>{v.label}</Element>)}
    </div>
  )
}

Menu.propTypes = {
  elements: PropTypes.arrayOf((propValue, key, componentName) => {
    if (!Reflect.has(propValue[key], 'label')) {
      return new Error(
        `Prop \`label\` is required supplied to` +
        ' `' + componentName + '`. Validation failed.'
      )
    }
  })
  // elements: PropTypes.array.isRequired
}

export default styled(Menu)`
  justify-self: center;
  flex-grow: 1;
  align-self: center;
`
