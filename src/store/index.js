import {createStore, combineReducers} from 'redux';
import HomeReducer from '../routes/Home/reducer';
import LoginReducer from '../routes/User/Login/reducer';

const reducers = combineReducers({
  HomeReducer,
  LoginReducer
})
const createStoreFun = () => {
  const store = createStore(
    reducers
  );
  return store;
}
export default createStoreFun;
