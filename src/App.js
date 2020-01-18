import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage.jsx';

const App = () => {
  const routes = (
    <Switch>
      <Route path='/' exact component={ Homepage } />
    </Switch>
  );

  return (
    <div>
      { routes }
    </div>
  );
}

export default App;
