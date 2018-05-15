import {connect} from 'react-redux';
import login from './action';
import LoginView from './components'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    /**
     * 登录事件
     * @param params
     */
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
