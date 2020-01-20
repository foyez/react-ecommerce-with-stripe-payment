import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './NavigationBar.scss';
import { ReactComponent as Logo } from '../../../assets/img/crown.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import CartDropdown from '../../CartDropdown/CartDropdown';

const NavigationBar = ({ showCart }) => (
  <div className="navigation-bar">
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <NavigationItems />
    { showCart && <CartDropdown /> }
  </div>
);

const mapStateToProps = ({ cart: { showCart } }) => ({
  showCart,
});

export default connect(mapStateToProps)(NavigationBar);