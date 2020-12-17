import { combineReducers } from 'redux';
import AuthReducer from '../views/login/reducer';
const rootReducer = combineReducers({
    AuthReducer,
})

export default rootReducer;