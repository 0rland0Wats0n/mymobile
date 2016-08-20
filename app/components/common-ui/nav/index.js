require('./nav.css');

import React from 'react';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';

export default () => {
  return (
    <div className="mymobile-nav">
      <Link to="/" className="mymobile-inline-anchor">
        <Isvg src="/images/mymobile.svg" className="mymobile-nav--logo" />
      </Link>
    </div>
  )
}
