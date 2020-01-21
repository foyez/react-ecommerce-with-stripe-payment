import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../redux/user/user.selectors';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { auth } from '../../../firebase/firebase.utils';
import CartIcon from '../../CartIcon/CartIcon';

const NavigationItems = ({ currentUser }) => {
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
      <div
        className='navigation-item'
        onClick={ () => auth.signOut() }
      >
        SIGN OUT
      </div>
      <CartIcon />
    </div>
  );

  return currentUser ? authLinks : guestLinks;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(NavigationItems);