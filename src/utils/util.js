import {message} from 'antd';
import {hashHistory} from 'react-router';

let preUrl = '';//保存上一次url
const checkAuthorized = () => {

}

export const checkLogin = (nextState, replace, next) => {
  /* const rootState = store.getState().rootReducer;*/
  const userInfoState = JSON.parse(localStorage.getItem('userInfoState'));

  // 判断store 中是否有用户登录数据
  /*if (!rootState.isLogin) {*/
  // 不含有用户登录数据，判断 localStorage 中的数据是否可以使用
  const pass = userInfoState && userInfoState.timestamp && new Date().getTime() - userInfoState.timestamp <= 60 * 60 * 1000;

  if (pass) {
    // userInfoState 存在，并且上一次离开在一小时以内，可以读取 localStorage 数据
    //const storedUserInfo = userInfoState.userInfo;

    // 'LOGIN' 将获取的数据更新到 store 中
    //store.dispatch({type: 'LOGIN', msg: storedUserInfo});
    checkAuthorized();
    next();
  } else {
    // userInfoState 不存在 或者 已过期，则跳转到登录页
    //hashHistory.push('/login');
    replace({
      pathname: '/login',
      query: {preUrl: preUrl}
    });
    next();
  }
  /* } else {
     // store 中 含有 用户登录数据，直接进入相应页面
     next();
   }*/
}
export const routerLeave = (context) => {
  debugger;
  preUrl = context.location.pathname;
}
/**
 * 创建异步的action
 * @param httpHandle axios请求
 * @param httpSuccessHandle 请求成功的回调
 */
export const createAsyncAction = (httpHandle, httpSuccessHandle) => {
  httpHandle.then(() => {
    httpSuccessHandle();
  })
    .catch(err => {
      message.error(err.message);
    })
}

