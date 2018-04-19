import Api from '../../common/api';
import {request} from '../../utils/request';

let requestData = (dispatch) => {
  //Common.setLoading('root');
  request(Api.Home.fristData, {}, 'post', 'root', root)
    .then(response => {
      //Common.removeLoading('root');
      console.log('进入then方法');
      dispatch({
        type: 'FETCH_POSTS',
        data: response.data
      })
    })
}
export default requestData;
