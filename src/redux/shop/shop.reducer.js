import SHOP_DATA from './shop.data';
import actionTypes from './shop.types';

const initialState = {
  collections: SHOP_DATA,
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;