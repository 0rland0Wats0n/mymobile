import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/index';
import Photo from './components/photo/index';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/image/:id' component={Photo} />
  </Route>
)
