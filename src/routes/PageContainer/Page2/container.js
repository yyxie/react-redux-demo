import {connect} from 'react-redux';
import requestData from './action';
import Page2View from './components'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestDataEvent: () => {
      //requestData(dispatch);
    }
  };
}
const mapStateToProps = (state, ownProps) => {
  return {
    // text: state.Page2View.text
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page2View)
