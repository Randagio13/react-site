import styled from 'styled-components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Img = styled.img`
  width: 176px;
  height: 179px;
`
const Gallery = styled.div`
  background: #FFFFFF;
  border-radius: 0 0 12px 12px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`

const Title = styled.h4`
  width: 80%;
  align-self: center;
`

const Description = styled.div`
  font-family: Helvetica;
  font-size: 26px;
  color: #000000;
  letter-spacing: 0;
  line-height: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: center;
`

class Container extends Component {
  getImages () {
    const { images } = this.props
    return images.map((i, k) => <Img key={k} src={i.url} />)
  }
  render () {
    const { description } = this.props
    console.log(description)
    return (
      <React.Fragment>
        <Description>
          <Title>{description}</Title>
        </Description>
        <Gallery>
          {this.getImages()}
        </Gallery>
      </React.Fragment>
    )
  }
}

Container.propTypes = {
  description: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired
}

export default Container
