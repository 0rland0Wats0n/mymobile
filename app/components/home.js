require('./app.css');
import React from 'react';

import Footer from './common-ui/footer/index';
import LinkButton from './common-ui/button-link/index';

export default () => {
  return (
    <div>
      <LinkButton link="/login" text="Home" />
      <Footer />
    </div>
  )
}
