import Api from '../../config/api';
import {createAsyncAction} from '../../utils/util'
import {request} from '../../utils/request';

const requestData = (dispatch) => {
  createAsyncAction(request(Api.Home.fristData, {}, 'post', 'root', 'json'), response => {
    dispatch({
      type: 'FETCH_POSTS',
      data: response.data
    })
  })
}
export default requestData;
