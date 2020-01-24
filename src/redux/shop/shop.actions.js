import actionTypes from './shop.types';

export const updateCollections = collectionsMap => ({
  type: actionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});