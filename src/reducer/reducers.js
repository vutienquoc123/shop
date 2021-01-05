import { combineReducers } from 'redux';
import ContactReducer from './userCheckout/Reducers/ContactReducer'
import AddressReducer from './userCheckout/Reducers/AddressReducer'
import TimeReducer from './userCheckout/Reducers/TimeReducer'
import HomeReducer from '../views/home/reducer'
import PaymentReducer from './userCheckout/Reducers/PaymentReducer'
import Cart from './reducers/Cart';
import Sub_Category from './reducers/Sub_Category';
import UserReducer from './login/reducers/userReducer'
const rootReducer = combineReducers({
  ContactReducer,
  AddressReducer,
  TimeReducer,
  HomeReducer,
  PaymentReducer,
  Sub_Category,
  UserReducer,
  Cart,
})

export default rootReducer;