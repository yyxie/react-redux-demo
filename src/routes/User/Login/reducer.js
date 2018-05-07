const LoginReducer = (state = [], action) => {
  switch (action.type) {
    case 'SIGNUP':
      return action.data
    case 'DECREMENT':
      return state
    default:
      return state
  }
}
export default LoginReducer;
