import React, { Component } from 'react'
import styled from 'styled-components'
import Heading from './Header/Heading'
import SubHeading from './Header/SubHeading'
import Description from './Content/Description'
import Line from './Content/Line'
import Footer from './Footer'
import Gallery from './Gallery'

class Articles extends Component {
  render () {
    const { className } = this.props
    return (
      <div className={className}>
        <Heading>Nun ce sta' mammà là dint'!</Heading>
        <SubHeading>Quann steva là in Honduras, steva rint a na capanna e nziemm a me ce steva.</SubHeading>
        <Description>E intant' e sord tuoj nunn arrivavan. 'Na sera gli honduregni me mettetter' nu macete n'man e gridavan': 'Accirel'! Accirel'! Je pregav', pregav' ca corcrun' me venev' a salva', ca tu me veniv' a salva'! </Description>
        <Line />
        <Footer />
        <Gallery />
      </div>
    )
  }
}

export default styled(Articles)`
  max-width: 567px;
  padding: 40px 0 0 100px;
`
