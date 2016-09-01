require('./social-list.css');

import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <ul className="social-list">
      <li className="social-list--item social-list--facebook">
        <Link to="#" className="social-list--link">
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
            <i className="fa fa-facebook fa-stack-1x social-list--icon" aria-hidden="true"></i>
          </span>
        </Link>
      </li>
      <li className="social-list--item social-list--twitter">
        <Link to="#" className="social-list--link">
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
            <i className="fa fa-twitter fa-stack-1x social-list--icon" aria-hidden="true"></i>
          </span>
        </Link>
      </li>
      <li className="social-list--item social-list--linkedin">
        <Link to="#" className="social-list--link">
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
            <i className="fa fa-linkedin fa-stack-1x social-list--icon" aria-hidden="true"></i>
          </span>
        </Link>
      </li>
    </ul>
  )
}
