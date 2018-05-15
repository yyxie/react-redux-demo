import {getUserInfo} from '../../../utils/util';

/**
 * 获得默认的state
 * @returns {{} & {person: {}, staffList: Array}}
 */
function getInitialState() {
  const initialState = {
    person: {},
    staffList: [],
  };
  const userInfo = getUserInfo();//从localStarge中获取用户信息
  return Object.assign({}, initialState, userInfo);
}

const LoginReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'SIGNUP':
      return Object.assign({}, state, action.data);
    default:
      return state
  }
}
export default LoginReducer;
