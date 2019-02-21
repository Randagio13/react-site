import styled from 'styled-components'
import piggy from '../../../../../../../images/piggy.svg'

const Icon = styled.img.attrs(({ typeIcon }) => ({
  src: typeIcon === 'piggy' ? piggy : null
}))`
  align-self: flex-start;
  padding: 20px 0 0 30px;
  z-index: 1;
`

export default Icon
