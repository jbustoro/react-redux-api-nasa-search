import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchResults } from './api';
import { imagesFetchSucceeded, imagesFetchFailed } from './actions';

function* fetchImages(action) {
  try {
    const results = yield call(fetchResults, action.payload);
    yield put(imagesFetchSucceeded(results.collection.items));
  } catch (e) {
    yield put(imagesFetchFailed(e.message));
  }
}

function* mySaga() {
  yield takeLatest('IMAGES_FETCH_REQUESTED', fetchImages);
}

export default mySaga;
