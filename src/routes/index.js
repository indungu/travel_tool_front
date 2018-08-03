import React from 'react';

import { Route, Switch } from 'react-router-dom';

import RequestPage from '../views/Request/Request';
import Login from '../views/Login/Login';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/requests" exact component={RequestPage} />
  </Switch>
);
export default Routes;
