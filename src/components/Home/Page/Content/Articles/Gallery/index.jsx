import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Photo = styled.div`
  width: 177px;
  height: 179px;
  background: ${props => props.path ? `url(${props.path})` : 'red'};
  background-size: cover;
`
const SmallPhoto = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.path ? `url(${props.path})` : 'green'};
  background-size: cover;
`
const ContentSmall = styled.div`
  padding: 0 18px 0 18px;
  div:not(:first-child) {
    margin-top: 18px;
  }
`

class Gallery extends Component {
  getImages () {
    const { images } = this.props
    const mapPhotos = [0, 2]
    return images.map((i, k) => {
      const { id, url } = i
      const minThumbs = (
        <ContentSmall key={k}>
          {this.getSmallImages(mapPhotos, images)}
        </ContentSmall>
      )
      return mapPhotos.indexOf(k) !== -1
        ? <Photo key={id} path={url} />
        : minThumbs
    })
  }
  getSmallImages (mapPhotos, images) {
    return images.filter((v, key) => mapPhotos.indexOf(key) === -1)
      .map(v => <SmallPhoto key={v.id} path={v.url} />)
  }
  render () {
    const { className } = this.props
    return (
      <div className={className}>
        {this.getImages()}
      </div>
    )
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired
}

export default styled(Gallery)`
  margin-top: 71px;
  display: flex;
  flex-flow: row nowrap;
  & > ${ContentSmall} ~ ${ContentSmall} {
    padding-right: 0;
  }
`
