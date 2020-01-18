import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem.jsx';

const NavigationItems = () => {
  const guestLinks = (
    <div className="navigation-items">
      <NavigationItem link='/shop'>SHOP</NavigationItem>
      <NavigationItem link='/contact'>CONTACT</NavigationItem>
    </div>
  );

  return guestLinks;
}

export default NavigationItems;