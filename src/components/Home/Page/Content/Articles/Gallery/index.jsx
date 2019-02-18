import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Photo = styled.div`
  width: 177px;
  height: 179px;
  background: ${props => props.path ? `url(${props.path})` : 'red'};
`
const SmallPhoto = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.path ? `url(${props.path})` : 'green'};
`
const ContentSmall = styled.div`
  padding: 0 18px 0 18px;
  div:not(:first-child) {
    margin-top: 18px;
  }
`
const Gallery = props => {
  const { className } = props
  return (
    <div className={className}>
      <Photo />
      <ContentSmall>
        <SmallPhoto />
        <SmallPhoto />
      </ContentSmall>
      <Photo />
      <ContentSmall>
        <SmallPhoto />
        <SmallPhoto />
      </ContentSmall>
    </div>
  )
}

// Gallery.propTypes = {

// }

export default styled(Gallery)`
  margin-top: 71px;
  display: flex;
  flex-flow: row nowrap;
  & > ${ContentSmall} ~ ${ContentSmall} {
    padding-right: 0;
  }
`
