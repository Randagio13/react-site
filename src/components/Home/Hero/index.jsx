import styled from 'styled-components'
import PropTypes from 'prop-types'

const Hero = styled.div`
  height: 640px;
  background: url(${props => props.src && props.src}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

Hero.propTypes = {
  src: PropTypes.string.isRequired
}

export default Hero
