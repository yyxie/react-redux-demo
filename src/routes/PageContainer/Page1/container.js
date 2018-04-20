import {connect} from 'react-redux';
import requestData from './action';
import Page1View from './components'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestDataEvent: () => {
      //requestData(dispatch);
    }
  };
}
const mapStateToProps = (state, ownProps) => {
  return {

    //text: state.Page1Reducer.text
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1View)
