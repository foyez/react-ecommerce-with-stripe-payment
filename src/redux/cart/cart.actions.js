import * as actionTypes from './cart.types';

export const toggleCart = () => ({
  type: actionTypes.TOGGLE_CART,
});

export const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
});