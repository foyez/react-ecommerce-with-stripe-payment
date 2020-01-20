import * as actionTypes from './user.types';

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user,
});