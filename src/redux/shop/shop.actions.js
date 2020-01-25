import actionTypes from './shop.types';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
  type: actionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => async dispatch => {
  const collectionsRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  try {
    const snapshot = await collectionsRef.get();
    const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    dispatch(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    dispatch(fetchCollectionsFailure(error.message))
  }
}