import styled from 'styled-components'

const Content = styled.div`
  width: ${props => props.fullscreen ? '100%' : '90%'};
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  position: relative;
  top: -188px;
  background: #ffffff;
  min-height: 188px;
  border-radius: 12px 12px 0 0;
`
export default Content
