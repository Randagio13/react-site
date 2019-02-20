import React from 'react'
import ReactDOM from 'react-dom'
import Box from '../components/Home/Page/Content/Articles/Boxes/Box'
import renderer from 'react-test-renderer'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Lists tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Box indexNum='01' title='Test title' subTitle='Test sub' icon='puggy' />
      , div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Snapshot', () => {
    const comp = renderer.create(
      <Box indexNum='01' title='Test title' subTitle='Test sub' icon='puggy' />
    )
    let tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
