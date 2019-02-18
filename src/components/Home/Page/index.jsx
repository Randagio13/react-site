import styled from 'styled-components'
// import PropTypes from 'prop-types'

import React, { Component } from 'react'
import Content from './Content'
import Articles from './Content/Articles'

class Page extends Component {
  render () {
    const { className } = this.props
    return (
      <div className={className}>
        <Content>
          <Articles />
        </Content>
      </div>
    )
  }
}

export default styled(Page)`
  background: transparent;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`
