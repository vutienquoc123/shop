import { combineReducers } from 'redux';
import ContactReducer from './userCheckout/Reducers/ContactReducer'
import AddressReducer from './userCheckout/Reducers/AddressReducer'
import TimeReducer from './userCheckout/Reducers/TimeReducer'
import HomeReducer from '../views/home/reducer'
import PaymentReducer from './userCheckout/Reducers/PaymentReducer'
const rootReducer = combineReducers({
  ContactReducer,
  AddressReducer,
  TimeReducer,
  HomeReducer,
  PaymentReducer,
})

export default rootReducer;