require('./nav.css');

import React from 'react';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';

export default () => {
  return (
    <div className="mymobile-nav">
      <span className="mymobile-nav--menu">
        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
      </span>
      <Link to="/">
        <Isvg src="/images/mymobile.svg" className="mymobile-nav--logo" />
      </Link>
    </div>
  )
}
