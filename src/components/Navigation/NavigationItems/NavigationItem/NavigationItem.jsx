import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

const NavigationItem = ({ link, exact, children }) => (
  <NavLink
    to={ link }
    exact={ exact }
    className='navigation-item'
    activeClassName='active'
  >
    { children }
  </NavLink>
);

export default NavigationItem;