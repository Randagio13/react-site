import styled from 'styled-components'

const Index = styled.span`
  &::before {
    content: '${props => props.index}';
  }
  transform: translate(-60px, 40px);
  font-family: Helvetica;
  font-size: 216px;
  color: #ECDA1F;
  letter-spacing: 0;
  z-index: 0;
`
export default Index
