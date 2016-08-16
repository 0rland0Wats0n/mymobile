import React from 'react';

import LinkButton from './button-link';

export default (props) => {
  return (
    <div className="col-sm-12 col-md-4 footer-cta">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
      {props.contentLink ? <a href={`mailto:${props.contentLink}`}>{props.contentLink}</a> : null}
      <LinkButton link={props.link} text={props.linkText} />
      {props.other ? <props.other /> : null}
    </div>
  )
}
