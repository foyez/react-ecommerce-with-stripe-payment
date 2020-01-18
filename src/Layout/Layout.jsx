import React from 'react';

// import Header from '../components/Header/Header.jsx';
import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar.jsx';

const Layout = ({ children }) => (
  <div>
    <NavigationBar />
    { children }
  </div>
);

export default Layout;