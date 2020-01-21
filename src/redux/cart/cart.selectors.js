import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectShowCart = createSelector(
  [selectCart],
  cart => cart.showCart
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
);