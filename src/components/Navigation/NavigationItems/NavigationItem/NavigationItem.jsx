import React from 'react';

import { NavItem, NavItemDiv } from './NavigationItem.styles'

const NavigationItem = ({ link, exact, div, children }) => {
  const item = div ? (
    <NavItemDiv>{ children }</NavItemDiv>
  ) : (
      <NavItem
        to={ link }
        exact={ exact }
      >
        { children }
      </NavItem>
    );
  return item;
}

export default NavigationItem;