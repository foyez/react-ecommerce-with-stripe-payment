import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.scss';
import { ReactComponent as Logo } from '../../../assets/img/crown.svg';
import NavigationItems from '../NavigationItems/NavigationItems';

const NavigationBar = ({ currentUser }) => (
  <div className="navigation-bar">
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <NavigationItems currentUser={ currentUser } />
  </div>
);

export default NavigationBar;