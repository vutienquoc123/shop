import { fork, all, takeLatest } from 'redux-saga/effects';
import loginSaga from './login/sagas/sagaLogin';

const sagas = function*() {
  yield all([takeLatest('HANDLE_LOGIN', loginSaga)]);
};
export default sagas;