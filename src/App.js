import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Layout from './Layout/Layout';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Auth from './pages/Auth/Auth';

const App = ({ currentUser }) => {
  const routes = (
    <Switch>
      <Route exact path='/' component={ Homepage } />
      <Route path='/shop' component={ ShopPage } />
      {/* <Route path='/auth' component={ Auth } /> */ }
      <Route
        path='/auth'
        render={ () => currentUser ? (
          <Redirect to='/' />
        ) : (
            <Auth />
          ) }
      />
      <Redirect to='/' />
    </Switch>
  );

  return (
    <Layout>
      { routes }
    </Layout>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);
