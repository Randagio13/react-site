import styled from 'styled-components'
import Index from './IndexNum'
import Icon from './Icon'
import React, { Component } from 'react'
import Headline from './Headline'
import SubHeadline from './SubHeadline'
import Button from './Button'
import PropTypes from 'prop-types'

const BoxStyled = styled.div.attrs(({ isModal, isOpen }) => ({
  style: {
    transform: !isModal && !isOpen ? '' : 'scale(1.2) translate(-35vw, 5vh)',
    position: isModal && 'absolute',
    // top: isModal && '40%',
    // left: isModal && '57%',
    zIndex: isModal && 1,
    width: isModal && 658,
    height: isModal && 458
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
    openModal(isOpen)
    this.setState({
      isModal: !isModal
    })
  }
  render () {
    const { indexNum, title, subTitle, icon, btnLabel, showButton, isOpen, onClick } = this.props
    const { isModal } = this.state
    const excerpt = subTitle ? subTitle.substring(0, 70) : ''
    if (isOpen && isModal) {
      return (
        <BoxStyled isModal={isModal} isOpen={isOpen}>
          {/* {showButton && <Button onClick={this.handleClickButton}>{btnLabel}</Button>} */}
        </BoxStyled>
      )
    }
    return (
      <BoxStyled isModal={isModal} isOpen={isOpen}>
        <Index>{indexNum}</Index>
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
  onClick: PropTypes.func
}

Box.defaultProps = {
  btnLabel: 'clicca qui',
  subTitle: '',
  showButton: false
}

export default Box
