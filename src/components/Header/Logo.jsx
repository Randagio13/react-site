import styled from 'styled-components'

import React from 'react'
import PropTypes from 'prop-types'

const Logo = props => {
  const { text, className } = props
  return (
    <p className={className}>{text}</p>
  )
}

Logo.propTypes = {
  text: PropTypes.string.isRequired
}

export default styled(Logo)`
  position: absolute;
  left: 60px;
  font-family: Helvetica;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  line-height: 18px;
`
