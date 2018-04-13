import {connect} from 'react-redux';
import requestData from './action';
import HomeView from './components'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        requestDataEvent: () => {
            requestData(dispatch);
        }
    };
}
const mapStateToProps = (state, ownProps) => {
    return {
        list: state.HomeReducer.data
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView)