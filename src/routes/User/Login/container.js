import {connect} from 'react-redux';
import login from './action';
import LoginView from './components'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginEvent: (params) => {
      login(dispatch, params, ownProps.location);
    }
  };
}
const mapStateToProps = (state, ownProps) => {
  return {
    staffList: state.LoginReducer.data
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)
