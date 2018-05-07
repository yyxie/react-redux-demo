import {message} from 'antd';
import {hashHistory} from 'react-router';
import Api from '../../../config/api';
import {createAsyncAction} from '../../../utils/util'
import {request} from '../../../utils/request';


const signUp = function (dispatch, params, currentLocation) {
  debugger;
  let {preUrl} = currentLocation.query;
  //Common.setLoading('root');
  createAsyncAction(request(Api.Login.signinUrl, params, 'post', 'root'), result => {
    console.log('进入then方法');
    let redirectUrl = '/';
    let parms = {};
    if (result.errorCode === 0 && result.data) {
      localStorage.userInfo = JSON.stringify(result.data);
      if (result.data.staffList.length === 0) {
        message.error('未创建雇员, 请联系管理员!');
      } else if (result.data.staffList.length === 1) {
        redirectUrl = '/';
        parms = {
          id: result.data.person.id,
          staffId: result.data.staffList[0].id
        };
      } else if (result.data.staffList.length > 1) {
        redirectUrl = '/center';
        parms = {id: result.data.person.id};
      }

      if (preUrl) {
        redirectUrl = preUrl;
      }
      hashHistory.push({
        pathname: redirectUrl,
        query: parms
      });
    }
    dispatch({
      type: 'SIGNUP',
      data: result.data
    })
  })
}
export default signUp;
