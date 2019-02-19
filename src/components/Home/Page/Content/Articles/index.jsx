import React, { Component } from 'react'
import styled from 'styled-components'
import Heading from './Header/Heading'
import SubHeading from './Header/SubHeading'
import Description from './Content/Description'
import Line from './Content/Line'
import Footer from './Footer'
import Gallery from './Gallery'
import Boxes from './Boxes'

class Articles extends Component {
  render () {
    const { className, data } = this.props
    console.log(data)
    return (
      <div className={className}>
        {this.getArticles()}
        <Boxes boxes={data} />
      </div>
    )
  }

  getArticles () {
    const { data } = this.props
    return data.map((s, i) => {
      const { id, heading, subheading, description, images } = s
      return i !== 0 ? null : (
        <React.Fragment key={id}>
          <Heading>{heading}</Heading>
          <SubHeading>{subheading ? subheading.substring(0, 100) : ''}</SubHeading>
          <Description>{description}</Description>
          <Line />
          <Footer />
          <Gallery images={images} />
        </React.Fragment>
      )
    })
  }
}

export default styled(Articles)`
  max-width: 567px;
  padding: 40px 0 0 100px;
`
