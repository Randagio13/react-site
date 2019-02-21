import styled from 'styled-components'
import Index from './IndexNum'
import Icon from './Icon'
import React, { Component } from 'react'
import Headline from './Headline'
import SubHeadline from './SubHeadline'
import Button from './Button'
import PropTypes from 'prop-types'
import Container from './Modal/Container'

const BoxStyled = styled.div.attrs(({ isModal, isOpen }) => ({
  style: {
    transform: !isModal && !isOpen ? '' : 'scale(1) translate(-50vw, 7vh)',
    position: isModal && 'fixed',
    // top: isModal && '40%',
    // left: isModal && '57%',
    zIndex: isModal && 1,
    width: isModal && 955,
    height: isModal && 658
  }
}))`
  ${props => {
    if (!props.isModal && props.isOpen) {
      return 'transform: translateY(500px); opacity: 0; z-index: 0;'
    }
  }}
  width: 310px;
  height: 414px;
  background: #F8E627;
  border-radius: 12px;
  font-family: Helvetica;
  font-size: 216px;
  color: #ECDA1F;
  letter-spacing: 0;
  font-family: Helvetica;
  font-size: 26px;
  color: #000000;
  letter-spacing: 0;
  line-height: 32px;
  margin: 0 0 30px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  transition: all 0.5s;
  display: flex;
  flex-flow: column nowrap;
`

class Box extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModal: false
    }
    this.handleClickButton = this.handleClickButton.bind(this)
  }
  handleClickButton (e) {
    const { openModal, isOpen } = this.props
    const { isModal } = this.state
    e.preventDefault()
    if (openModal) {
      openModal(isOpen)
    }
    this.setState({
      isModal: !isModal
    })
  }
  render () {
    const { indexNum, title, subTitle, icon, btnLabel, showButton, isOpen, onClick, images } = this.props
    const { isModal } = this.state
    const excerpt = subTitle ? subTitle.substring(0, 70) : ''
    if (isModal) {
      return (
        <BoxStyled isModal={isModal} isOpen={isOpen}>
          <Container description={subTitle} images={images} />
          {/* {showButton && <Button onClick={this.handleClickButton}>{btnLabel}</Button>} */}
        </BoxStyled>
      )
    }
    return (
      <BoxStyled isModal={isModal} isOpen={isOpen}>
        <Index index={indexNum} />
        <Icon typeIcon={icon} />
        <Headline>{title}</Headline>
        <SubHeadline>{excerpt}</SubHeadline>
        {showButton && <Button onClick={onClick || this.handleClickButton}>{btnLabel}</Button>}
      </BoxStyled>
    )
  }
}

Box.propTypes = {
  /** Background number. */
  indexNum: PropTypes.string.isRequired,
  /** Title component. */
  title: PropTypes.string.isRequired,
  /** Subtitle component. */
  subTitle: PropTypes.string,
  /** Icon component. */
  icon: PropTypes.string,
  /** Icon component. */
  btnLabel: PropTypes.string,
  /** Show button component. */
  showButton: PropTypes.bool,
  /** Onclick component. */
  onClick: PropTypes.func,
  /** Images component. */
  images: PropTypes.array
}

Box.defaultProps = {
  btnLabel: 'clicca qui',
  subTitle: '',
  showButton: false,
  images: []
}

export default Box
