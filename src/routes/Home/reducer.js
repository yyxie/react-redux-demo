const homeReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.data
    case 'DECREMENT':
      return state
    default:
      return state
  }
}
export default homeReducer;
