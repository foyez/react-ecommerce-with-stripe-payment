import actionTypes from './shop.types';

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