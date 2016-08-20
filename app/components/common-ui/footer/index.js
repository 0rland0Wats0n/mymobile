require('./footer.css');

import React from 'react';

import SocialList from '../social-list/index';

export default () => {
  return (
    <footer className="container-fluid">
      <SocialList className="pull-right" />
    </footer>
  )
}
