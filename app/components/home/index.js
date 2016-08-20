require('./home.css');
import React from 'react';

import Footer from '../common-ui/footer/index';
import Nav from '../common-ui/nav/index';
import LinkButton from '../common-ui/button-link/index';

export default () => {
  return (
    <div>
      <Nav />
      <Footer />
    </div>
  )
}
