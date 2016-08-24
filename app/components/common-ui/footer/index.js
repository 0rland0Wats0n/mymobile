require('./footer.css');

import React from 'react';
import { Link } from 'react-router';

import SocialList from '../social-list/index';

export default () => {
  return (
    <footer className="container-fluid">
      <p className="mymobile-footer-details">
        <span>&copy; {new Date().getFullYear()} Orlando Watson</span>
      </p>
      <SocialList />
    </footer>
  )
}
