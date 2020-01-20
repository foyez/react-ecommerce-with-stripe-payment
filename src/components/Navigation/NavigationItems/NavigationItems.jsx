import React from 'react';

import { connect } from 'react-redux';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { auth } from '../../../firebase/firebase.utils';

const NavigationItems = ({ currentUser }) => {
  const guestLinks = (
    <div className="navigation-items">
      <NavigationItem link='/shop'>SHOP</NavigationItem>
      <NavigationItem link='/contact'>CONTACT</NavigationItem>
      <NavigationItem link='/auth'>SIGN IN</NavigationItem>
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
    </div>
  );

  return currentUser ? authLinks : guestLinks;
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(NavigationItems);