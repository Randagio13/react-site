import styled from 'styled-components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

const BoxesContainer = styled.div`
  transform: translateY(${props => props.translate ? `${props.translate}px` : '0'});
  width: 310px;
  top: ${props => props.top !== 0 ? `${props.top}px` : '442px'};
  position: fixed;
  left: calc(100vw - 36vw);
  text-align: center;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
`

class Boxes extends Component {
  constructor (props) {
    super(props)
    this.boxRef = React.createRef()
    this.state = {
      translate: 0,
      top: 0
    }
  }

  componentDidMount () {
    this.windowScroll()
  }

  windowScroll () {
    window.addEventListener('scroll', () => {
      // console.log('Ref ==> ', this.boxRef)
      const y = window.scrollY
      const pos = -(y - y / 2)
      // const add = Math.round(y - top)
      // const rem = Math.round(top - y)
      console.log(pos, y)
      if (y <= 550) {
        this.setState({
          translate: pos
        })
      } else {
        this.setState({
          top: 20
        })
      }
    })
  }
  getBox () {
    const { boxes } = this.props
    return boxes.map((b, i) => {
      console.log(i)
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
    const { translate, top } = this.state
    console.log(`Render ==> ${translate}`)
    return (
      <BoxesContainer ref={this.boxRef} translate={translate} top={top}>
        {this.getBox()}
      </BoxesContainer>
    )
  }
}

Boxes.propTypes = {
  boxes: PropTypes.array.isRequired
}

export default Boxes
