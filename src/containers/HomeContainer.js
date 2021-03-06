import Home from '../components/Home'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { openModal } from '../reducers/index'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, props) => {
  return {
    ...state,
    ...props
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  openModal
}, dispatch)

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Home)
)
