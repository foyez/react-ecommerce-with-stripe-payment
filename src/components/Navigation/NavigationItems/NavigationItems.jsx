import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { auth } from '../../../firebase/firebase.utils';

const NavigationItems = ({ currentUser }) => {
  const guestLinks = (
    <div className="navigation-items">
      <NavigationItem link='/shop'>SHOP</NavigationItem>
      <NavigationItem link='/contact'>CONTACT</NavigationItem>
      { currentUser ? (
        <div className='navigation-item' onClick={ () => auth.signOut() }>
          SIGN OUT
        </div>
      ) : (
          <NavigationItem link='/auth'>SIGN IN</NavigationItem>
        ) }
    </div>
  );

  return guestLinks;
}

export default NavigationItems;