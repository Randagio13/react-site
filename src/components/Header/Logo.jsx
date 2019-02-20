import styled from 'styled-components'

import React from 'react'
import PropTypes from 'prop-types'

const Logo = props => {
  const { text, className } = props
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  )
}

Logo.propTypes = {
  text: PropTypes.string.isRequired
}

export default styled(Logo)`
  font-family: Helvetica;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  left: 60px;
  align-self: center;
  text-transform: capitalize;
`
