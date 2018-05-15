const initialState = {
  list: [],
  flag: false,
}

const homeReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS': //每个case返回的都是这个界面中所有的用到redux的数据和
      return Object.assign({}, state, {list: action.data})
    default:
      return state
  }
}
export default homeReducer;
