import styled from 'styled-components'
// import PropTypes from 'prop-types'

import React, { Component } from 'react'
import Content from './Content'
import Articles from './Content/Articles'

class Page extends Component {
  componentDidMount () {
    const { loadingData, data } = this.props
    if (data.length === 0) {
      loadingData()
    }
  }
  render () {
    const { className, data } = this.props
    return (
      <div className={className}>
        <Content>
          <Articles data={data} />
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
