import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { signOutStart } from '../../../redux/user/user.actions';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import CartIcon from '../../CartIcon/CartIcon';

const NavigationItems = ({ currentUser, dispatch }) => {
  const guestLinks = (
    <div className="navigation-items">
      <NavigationItem link='/shop'>SHOP</NavigationItem>
      <NavigationItem link='/contact'>CONTACT</NavigationItem>
      <NavigationItem link='/auth'>SIGN IN</NavigationItem>
      <CartIcon />
    </div>
  );

  const authLinks = (
    <div className="navigation-items">
      <NavigationItem link='/shop'>SHOP</NavigationItem>
      <NavigationItem link='/contact'>CONTACT</NavigationItem>
      <NavigationItem
        div={ true }
        clicked={ () => dispatch(signOutStart()) }
      >
        SIGN OUT
      </NavigationItem>
      <CartIcon />
    </div>
  );

  return currentUser ? authLinks : guestLinks;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(NavigationItems);