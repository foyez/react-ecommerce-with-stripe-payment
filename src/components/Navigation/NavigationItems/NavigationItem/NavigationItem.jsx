import React from 'react';

import { NavItem } from './NavigationItem.styles'

const NavigationItem = ({ link, exact, children }) => (
  <NavItem
    to={ link }
    exact={ exact }
  >
    { children }
  </NavItem>
);

export default NavigationItem;