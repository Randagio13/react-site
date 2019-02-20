import styled, { css } from 'styled-components'
import Index from './IndexNum'
import Icon from './Icon'
import React, { Component } from 'react'
import Headline from './Headline'
import SubHeadline from './SubHeadline'
import Button from './Button'
import ModalContainer from './Modal'
import PropTypes from 'prop-types'

const openModal = css`
  transform: scale(1.5) translate(-10vw, -10vh);
`

const BoxStyled = styled.div`
  width: 310px;
  height: 414px;
  // width: ${props => props.isModal ? '957px' : '310px'};
  // height: ${props => props.isModal ? '658px' : '414px'};
  // ${props => props.isModal ? 'top: -30%' : 'top: 442px'};
  // ${props => props.isModal ? 'left: -200%' : 'left: 450px'};
  // ${props => props.isModal ? 'position: absolute' : 'position: fixed'};
  // ${props => props.isModal ? 'z-index: 1;' : ''}
  ${props => props.isModal ? `${openModal}` : ''}
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
  }
  render () {
    const { indexNum, title, subTitle, icon, btnLabel } = this.props
    const { isModal } = this.state
    const excerpt = subTitle ? subTitle.substring(0, 70) : ''
    return (
      <BoxStyled isModal={isModal}>
        <Index>{indexNum}</Index>
        <Icon typeIcon={icon} />
        <Headline>{title}</Headline>
        <SubHeadline>{excerpt}</SubHeadline>
        <Button>{btnLabel}</Button>
        <ModalContainer>ciao</ModalContainer>
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
  showButton: PropTypes.bool
}

Box.defaultProps = {
  btnLabel: 'clicca qui',
  subTitle: ''
}

export default Box
