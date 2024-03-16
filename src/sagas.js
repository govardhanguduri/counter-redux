// sagas.js
import { takeEvery, put } from 'redux-saga/effects';
import { INCREMENT_ASYNC, INCREMENT } from './actions';

function* incrementAsync() {
  yield new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
  yield put({ type: INCREMENT });
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export function* rootSaga() {
  yield [
    watchIncrementAsync()
  ];
}
