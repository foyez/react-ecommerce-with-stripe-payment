import * as actionTypes from './cart.types';

export const toggleCart = () => ({
  type: actionTypes.TOGGLE_CART,
});

export const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: actionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});