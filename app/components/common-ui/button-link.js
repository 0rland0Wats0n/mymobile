import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <Link className="button button-link" to={props.link}>
      {props.text}
    </Link>
  )
}
