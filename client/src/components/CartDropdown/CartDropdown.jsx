import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions';

import Button from '../UI/Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleCheckoutClick = () => {
    history.push('/checkout');
    dispatch(toggleCart());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        { cartItems.length ? cartItems.map(cartItem => (
          <CartItem key={ cartItem.id } item={ cartItem } />
        )) : (
            <span className="empty-message">Your cart is empty</span>
          ) }
      </div>
      <Button onClick={ handleCheckoutClick }>
        GO TO CHECKOUT
      </Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));