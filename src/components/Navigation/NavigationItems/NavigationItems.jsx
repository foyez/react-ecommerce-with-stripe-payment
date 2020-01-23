import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../redux/user/user.selectors';

import NavigationItem from './NavigationItem/NavigationItem';
import { auth } from '../../../firebase/firebase.utils';
import CartIcon from '../../CartIcon/CartIcon';
import { NavItems } from './NavigationItems.styles'

const NavigationItems = ({ currentUser }) => {
  const guestLinks = (
    <NavItems>
      <NavigationItem link='/shop'>SHOP</NavigationItem>
      <NavigationItem link='/contact'>CONTACT</NavigationItem>
      <NavigationItem link='/auth'>SIGN IN</NavigationItem>
      <CartIcon />
    </NavItems>
  );

  const authLinks = (
    <NavItems>
      <NavigationItem link='/shop'>SHOP</NavigationItem>
      <NavigationItem link='/contact'>CONTACT</NavigationItem>
      <NavigationItem
        div={ true }
        onClick={ () => auth.signOut() }
      >
        SIGN OUT
      </NavigationItem>
      <CartIcon />
    </NavItems>
  );

  return currentUser ? authLinks : guestLinks;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(NavigationItems);