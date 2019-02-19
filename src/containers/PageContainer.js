import Page from '../components/Home/Page'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadingData } from '../reducers/index'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, props) => {
  return {
    ...state,
    ...props
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadingData
}, dispatch)

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Page)
)
