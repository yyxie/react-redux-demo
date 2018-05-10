import Cookies from 'js-cookie';

import Center from './container';
import {isEmpty, checkSite, routerLeave} from '../../utils/util';
import constants from '../../config/constants';

const isLogin = function () {
  const userInfo = localStorage.getItem(constants.Variable.LOCALSTORAGE_KEY.userInfo);

  // 满足一下条件
  // 1. localStorage中获取person,staffList
  // 2. cookie 未获取到token
  // 3. siteType和系统不一致

  if (isEmpty(userInfo)
    || !Cookies.get(constants.Variable.tokenCookieName)
    || checkSite() === false) {
    return false;
  }

  return true;
}

const checkLogin = (nextState, replace, next) => {
  if (isLogin()) {
    next();
  } else {
    // userInfoState 不存在 或者 已过期，则跳转到登录页
    //hashHistory.push('/login');
    replace({
      pathname: '/login',
      query: {preUrl: ''}
    });
    next();
  }
};

export default {
  path: '/center',
  component: Center,
  onEnter: checkLogin,
  onLeave: routerLeave
}
