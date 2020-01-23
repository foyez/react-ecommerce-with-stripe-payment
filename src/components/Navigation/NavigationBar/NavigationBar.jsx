import React from 'react';

import { connect } from 'react-redux';
import { selectShowCart } from '../../../redux/cart/cart.selectors';

import './NavigationBar.scss';
import { ReactComponent as Logo } from '../../../assets/img/crown.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import CartDropdown from '../../CartDropdown/CartDropdown';
import { NavBarContainer, LogoContainer } from './NavigationBar.styles';

const NavigationBar = ({ showCart }) => (
  <NavBarContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <NavigationItems />
    { showCart && <CartDropdown /> }
  </NavBarContainer>
);

const mapStateToProps = state => ({
  showCart: selectShowCart(state),
});

export default connect(mapStateToProps)(NavigationBar);