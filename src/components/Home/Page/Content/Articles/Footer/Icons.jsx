import React from 'react'
import water from '../../../../../../images/water.svg'
import paper from '../../../../../../images/paper.svg'
import fire from '../../../../../../images/fire.svg'
import styled from 'styled-components'

const Img = styled.img`
  margin: 0 0 0 20px;
  cursor: pointer;
`

const Icons = props => (
  <div className={props.className}>
    <Img src={fire} alt='water' />
    <Img src={paper} alt='water' />
    <Img src={water} alt='water' />
  </div>
)

export default styled(Icons)`
  align-self: center;
`
