import { combineReducers } from 'redux';
import ContactReducer from './userCheckout/Reducers/ContactReducer'
import AddressReducer from './userCheckout/Reducers/AddressReducer'
import TimeReducer from './userCheckout/Reducers/TimeReducer'
const rootReducer = combineReducers({
  ContactReducer,
  AddressReducer,
  TimeReducer
})

export default rootReducer;