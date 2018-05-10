import {message} from 'antd';
import {hashHistory} from 'react-router';
import Cookies from 'js-cookie';

import constants from '../config/constants';

let preUrl = '';//保存上一次url
const checkAuthorized = () => {

};

function checkSite() {
  const site = localStorage[constants.Variable.LOCALSTORAGE_KEY.siteType];

  return !!(site && site === constants.Variable.systemConfig.siteType);
}

export const isEmpty = function (value) {
  // 本身为空直接返回true
  if (value == null) return true;

  // 然后可以根据长度判断，在低版本的ie浏览器中无法这样判断。
  if (value.length > 0) return false;
  if (value.length === 0) return true;

  //最后通过属性长度判断。
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) return false;
  }

  return true;
}

export const getUserInfo = function () {
  const userInfo = localStorage.getItem(constants.Variable.LOCALSTORAGE_KEY.userInfo);

  if (userInfo) {
    return JSON.parse(userInfo);
  }

  return {};
}

export const isLogin = function () {
  const userInfo = localStorage.getItem(constants.Variable.LOCALSTORAGE_KEY.userInfo);
  const currentStaff = localStorage.getItem(constants.Variable.LOCALSTORAGE_KEY.currentStaff);

  // 满足一下条件
  // 1. localStorage中获取person,staffList
  // 2. currentStaff 当前staff数据为空
  // 3. cookie 未获取到token
  // 4. siteType和系统不一致

  if (isEmpty(userInfo) || isEmpty(currentStaff)
    || !Cookies.get(constants.Variable.tokenCookieName)
    || checkSite() === false) {
    return false;
  }

  return true;
}

export const setUserInfo = function (userData) {
  localStorage[constants.Variable.LOCALSTORAGE_KEY.userInfo] = JSON.stringify(userData);
  localStorage[constants.Variable.LOCALSTORAGE_KEY.siteType] = constants.Variable.systemConfig.siteType;

  localStorage.timestamp = new Date().getTime();
}

export const setCurrentUser = function (user) {
  localStorage[constants.Variable.LOCALSTORAGE_KEY.currentStaff] = JSON.stringify(user);

  localStorage.timestamp = new Date().getTime();
}

export const setAllUserInfo = function (userData) {
  Cookies.set(constants.Variable.tokenCookieName, userData.person.ticket, {expires: 1});

  setUserInfo(userData);

  if (userData.staffList.length === 1) {
    setCurrentUser(userData.staffList[0]);
  }
}

export const checkLogin = (nextState, replace, next) => {
  if (isLogin()) {
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
};

export const routerLeave = (context) => {
  debugger;
  preUrl = context.location.pathname;
};

/**
 * 创建异步的action
 * @param httpHandle axios请求
 * @param httpSuccessHandle 请求成功的回调
 */
export const createAsyncAction = (httpHandle, httpSuccessHandle) => {
  httpHandle.then(result => {
    httpSuccessHandle(result);
  })
    .catch(err => {
      //message.error(err.message);
    })
};
