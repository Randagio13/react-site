import styled from 'styled-components'
import Author from './Author'
import React from 'react'
import Icons from './Icons'

const Footer = props => {
  const { className } = props
  return (
    <div className={className}>
      <Author name='lorem ipsim' />
      <Icons />
    </div>
  )
}

export default styled(Footer)`
  display: flex;
  flex-flow: row wrap;
`
