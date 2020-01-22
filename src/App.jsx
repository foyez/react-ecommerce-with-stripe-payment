import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import AuthPage from './pages/auth/Auth';
import CheckoutPage from './pages/checkout/Checkout'

import Layout from './Layout/Layout';

const App = ({ currentUser }) => {
  const routes = (
    <Switch>
      <Route exact path='/' component={ Homepage } />
      <Route path='/shop' component={ ShopPage } />
      <Route path='/checkout' component={ CheckoutPage } />
      {/* <Route path='/auth' component={ Auth } /> */ }
      <Route
        path='/auth'
        render={ () => currentUser ? (
          <Redirect to='/' />
        ) : (
            <AuthPage />
          ) }
      />
      {/* <Redirect to='/' /> */ }
    </Switch>
  );

  return (
    <Layout>
      { routes }
    </Layout>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
