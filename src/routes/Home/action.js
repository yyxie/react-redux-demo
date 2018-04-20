import Api from '../../config/api';
import {createAsyncAction} from '../../utils/util'
import {request} from '../../utils/request';

let requestData = (dispatch) => {
  //Common.setLoading('root');
  createAsyncAction(request(Api.Home.fristData, {}, 'post', 'root', root), response => {
    //Common.removeLoading('root');
    console.log('进入then方法');
    dispatch({
      type: 'FETCH_POSTS',
      data: response.data
    })
  })
}
export default requestData;
