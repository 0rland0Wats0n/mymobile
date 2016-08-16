import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/index';

import Login from './components/access/login/index';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='login' component={Login} />
  </Route>
)
