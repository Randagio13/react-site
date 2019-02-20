import styled from 'styled-components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

const BoxesContainer = styled.div.attrs(({ left, top, position, translate }) => ({
  style: {
    left,
    top,
    position,
    marginTop: position === 'fixed' ? 0 : '-150px',
    paddingLeft: position === 'fixed' ? 0 : '85px',
    transform: `translateY(${translate})`
  }
}))`
  width: 310px;
  text-align: center;
`

class Boxes extends Component {
  constructor (props) {
    super(props)
    this.boxRef = React.createRef()
    this.state = {
      translate: 0,
      top: 40,
      left: 0
    }
    this.windowScroll = this.windowScroll.bind(this)
    this.windowScroll()
  }
  windowScroll () {
    window.addEventListener('scroll', () => {
      const y = window.scrollY
      const pos = (y * 0.315)
      const limit = 525
      switch (true) {
        case y < limit:
          this.setState({
            translate: `${pos}px`,
            position: 'initial'
          })
          break
        case y >= limit:
          this.setState({
            translate: 0,
            position: `fixed`,
            left: `64.7%`
          })
          break
        default:
          break
      }
    })
  }
  getBox () {
    const { boxes } = this.props
    return boxes.map((b, i) => {
      const { id, heading, subheading, icons } = b
      return (
        <Box
          key={id}
          indexNum={`0${(i + 1)}`}
          title={heading}
          subTitle={subheading}
          icon={icons[0]}
        />
      )
    })
  }
  render () {
    const { translate, top, position, left } = this.state
    return (
      <BoxesContainer
        ref={this.boxRef}
        position={position}
        translate={translate}
        top={top}
        left={left}
      >
        {this.getBox()}
      </BoxesContainer>
    )
  }
}

Boxes.propTypes = {
  boxes: PropTypes.array.isRequired
}

export default Boxes
