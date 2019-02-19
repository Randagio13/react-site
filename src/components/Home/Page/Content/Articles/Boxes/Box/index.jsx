import styled from 'styled-components'
import Index from './IndexNum'
import Icon from './Icon'
import React, { Component } from 'react'
import Headline from './Headline'
import SubHeadline from './SubHeadline'
import Button from './Button'
import ModalContainer from './Modal'

class Box extends Component {
  render () {
    const { className, indexNum, title, subTitle, icon } = this.props
    const excerpt = subTitle ? subTitle.substring(0, 70) : ''
    console.log(subTitle)
    return (
      <div className={className}>
        <Index>{indexNum}</Index>
        <Icon typeIcon={icon} />
        <Headline>{title}</Headline>
        <SubHeadline>{excerpt}</SubHeadline>
        <Button>clicca qui</Button>
        <ModalContainer>ciao</ModalContainer>
      </div>
    )
  }
}

export default styled(Box)`
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
`
