import { combineReducers } from 'redux';
// import AuthReducer from '../views/login/reducer';
import HomeReducer from '../views/home/reducer';
import Sub_Category from './reducers/Sub_Category';
const rootReducer = combineReducers({
  HomeReducer,
  Sub_Category
})

export default rootReducer;