import {connect} from 'react-redux';
import CenterView from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    staffList: state.LoginReducer.staffList
  }
}

export default connect(
  mapStateToProps,
)(CenterView)
