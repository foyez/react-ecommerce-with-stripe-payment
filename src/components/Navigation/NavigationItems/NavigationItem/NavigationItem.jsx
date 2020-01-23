import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

const NavigationItem = ({ link, exact, clicked, div, children }) => {
  const item = div ? (
    <div
      className='navigation-item'
      onClick={ clicked }
    >
      { children }
    </div>
  ) : (
      <NavLink
        to={ link }
        exact={ exact }
        className='navigation-item'
        activeClassName='active'
      >
        { children }
      </NavLink>
    );
  return item;
}

export default NavigationItem;