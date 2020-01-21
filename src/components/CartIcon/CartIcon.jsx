import React from 'react';

import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon" onClick={ toggleCart }>
    <ShoppingIcon className='shopping-icon' />
    <span className="item-count">{ itemCount }</span>
  </div>
);

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);