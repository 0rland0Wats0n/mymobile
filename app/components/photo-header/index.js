require('./photo-header.css');

import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div className="mymobile-photo-header">
      <p className="mymobile-photo-header--description">{props.data.description}</p>
      <div className="mymobile-photo-header--controls">
        <Link to="/" className="mymobile-photo-header--close-button">
          <i className="fa fa-times"></i>
        </Link>
      </div>
    </div>
  )
}
