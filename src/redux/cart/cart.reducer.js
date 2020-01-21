import * as actionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const initialState = {
  showCart: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
}

export default cartReducer;