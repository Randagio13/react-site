import styled from 'styled-components'
import piggy from '../../../../../../../images/piggy.svg'

const Icon = styled.img.attrs(({ typeIcon }) => ({
  src: typeIcon === 'piggy' ? piggy : null
}))`
  position: relative;
  left: -242px;
  top: -32px;
`

export default Icon
