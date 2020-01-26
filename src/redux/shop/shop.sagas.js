import { takeEvery, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection('collections');
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}