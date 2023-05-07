import { call, put, takeEvery } from 'redux-saga/effects';
import { setUsers, FETCH_USERS } from '../store/userReducer';

const fetUsersFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users');

function* fetchUserWorker() {
  const data = yield call(fetUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}
