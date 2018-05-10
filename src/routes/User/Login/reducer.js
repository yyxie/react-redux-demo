import {getUserInfo} from '../../../utils/util';

function getInitialState() {
  const initialState = {
    person: {},
    staffList: [],
  };

  const userInfo = getUserInfo();

  return Object.assign({}, initialState, userInfo);
}

const LoginReducer = (state = getInitialState(), action) => {
  debugger;

  switch (action.type) {
    case 'SIGNUP':
      return Object.assign({}, state, action.data);

    default:
      return state
  }
}
export default LoginReducer;
