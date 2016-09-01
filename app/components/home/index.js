require('./home.css');
import React from 'react';

import PhotoList from '../photo-list/index';
import Footer from '../common-ui/footer/index';
import Nav from '../common-ui/nav/index';

export default () => {
  return (
    <div>
      <Nav />
      <PhotoList />
      <Footer />
    </div>
  )
}
