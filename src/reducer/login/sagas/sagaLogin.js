import { call, put, select } from 'redux-saga/effects';
import { HANDLE_LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE } from "../actions/actionTypes";
import request from '../requests/index';
import { AsyncStorage } from 'react-native';
import {GET_LOGGED_IN_CUSTOMER} from '../../../graphql/query/customer'

function* saveTokenToStore(data) {
  yield AsyncStorage.multiSet(
    [['AccessToken', data.access_token], ['RefreshToken', data.refresh_token]],
    err => {
      console.log('ERROR saveTokenToStore: ', err);
    },
  );
}
function* postLoginAction(username, password) {
  try {
    console.log(
      `Login Saga - postLoginAction: username: ${username} - password: ${password}`,
    );
    let response = yield call(request.login, username, password); 
    // # Gọi API Login ở đây.
    yield call(saveTokenToStore, response);
    //  # Nếu API gọi thành công. Chúng ta save access_token và Store
    console.log('responseresponse ------------->', response);
    yield put({ type: LOGIN_SUCCESS, payload: response }); 
    // # Gọi action LOGIN_SUCCESS
  } catch (err) {
    console.log('err  ------------->', err);
    yield put({ type: LOGIN_FAILURE, err });
    //  # Nếu lỗi gọi action LOGIN_FAILURE
  }
}

export default function*(action) {
  console.log('Login Saga - Action', action);
  yield call(postLoginAction, action.payload.username, action.payload.password);
}