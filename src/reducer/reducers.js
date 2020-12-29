import { combineReducers } from 'redux';
import ContactReducer from './userCheckout/Reducers/ContactReducer'
import AddressReducer from './userCheckout/Reducers/AddressReducer'
import TimeReducer from './userCheckout/Reducers/TimeReducer'
import HomeReducer from '../views/home/reducer'
import Sub_Reducer from '../reducer/reducers/Sub_Category'
const rootReducer = combineReducers({
  ContactReducer,
  AddressReducer,
  TimeReducer,HomeReducer,
  Sub_Reducer
})

export default rootReducer;