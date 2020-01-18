import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout.jsx';
import Homepage from './pages/homepage/Homepage.jsx';
import ShopPage from './pages/shop/Shop.jsx';

const App = () => {
  const routes = (
    <Switch>
      <Route path='/' exact component={ Homepage } />
      <Route path='/shop' component={ ShopPage } />
    </Switch>
  );

  return (
    <Layout>
      { routes }
    </Layout>
  );
}

export default App;
