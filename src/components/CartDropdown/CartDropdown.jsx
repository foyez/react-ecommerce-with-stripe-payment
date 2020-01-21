import React from 'react';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import Button from '../UI/Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      { cartItems.map(cartItem => (
        <CartItem key={ cartItem.id } item={ cartItem } />
      )) }
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);