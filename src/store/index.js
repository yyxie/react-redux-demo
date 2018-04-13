import {createStore, combineReducers} from 'redux';
import HomeReducer from '../routes/Home/reducer'

const reducers = combineReducers({
    HomeReducer
})
const createStoreFun = () => {
    const store = createStore(
        reducers
    );
    return store;
}
export default createStoreFun;