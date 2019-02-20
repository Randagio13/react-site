import PropTypes from 'prop-types'
import React from 'react'
import author from '../../../../../../images/author.svg'
import styled from 'styled-components'

const Name = styled.span`
  font-family: OpenSans;
  font-size: 12px;
  color: #9B9B9B;
  letter-spacing: 0;
  line-height: 16px;
  text-transform: capitalize;
  margin-left: 10px;
  vertical-align: super;
`

const Author = props => (
  <div className={props.className}>
    <img alt='test' src={author} />
    <Name>{props.name}</Name>
  </div>
)

Author.propTypes = {
  name: PropTypes.string.isRequired
}

export default styled(Author)`
  flex-grow: 1;
`
