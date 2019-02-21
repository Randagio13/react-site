import React from 'react'
import ReactDOM from 'react-dom'
import Box from '../components/Home/Page/Content/Articles/Boxes/Box'
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup } from 'react-testing-library'

describe('Box tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Box indexNum='01' title='Test title' subTitle='Test sub' icon='puggy' />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('checking props', () => {
    const { queryByText } = render(
      <Box indexNum='01' title='Test title' subTitle='Test sub' icon='puggy' />
    )
    expect(queryByText(/Test title/i)).toBeTruthy()
    expect(queryByText(/Test sub/i)).toBeTruthy()
  })

  it('Click button', () => {
    const { queryByText } = render(
      <Box
        indexNum='01'
        title='Test title'
        subTitle='Test sub'
        icon='puggy'
        showButton
      />
    )
    expect(queryByText(/Clicca qui/i)).toBeTruthy()
    fireEvent.click(queryByText(/Clicca qui/i))
    expect(queryByText(/Clicca qui/i)).toBeFalsy()
  })

  it('Snapshot', () => {
    const comp = renderer.create(
      <Box indexNum='01' title='Test title' subTitle='Test sub' icon='puggy' />
    )
    let tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Snapshot inline', () => {
    const comp = renderer.create(
      <Box indexNum='01' title='Test title' subTitle='Test sub' icon='puggy' />
    )
    let tree = comp.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="sc-dnqmqq dqQiYf"
  style={
    Object {
      "height": false,
      "position": false,
      "transform": "",
      "width": false,
      "zIndex": false,
    }
  }
>
  <span
    className="sc-bdVaJa QXyNA"
  />
  <img
    className="sc-bwzfXH gnkQvR"
    src={null}
  />
  <h1
    className="sc-htpNat fulttM"
  >
    Test title
  </h1>
  <h3
    className="sc-bxivhb efitiw"
  >
    Test sub
  </h3>
</div>
`)
  })
})
