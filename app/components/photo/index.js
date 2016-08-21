require('./photo.css');

import _ from 'underscore';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getImage } from '../../actions/index';

class Photo extends Component {
  componentWillMount() {
    this.props.getImage(this.props.params.id);
  };
  render() {
    return (
      <div className="mymobile-photo--container">
        {this.renderImage()}
      </div>
    )
  };
  renderImage = () => {
    const image = this.props.image;

    if(!_.isEmpty(image)) {
      return (
        <img className="mymobile-photo--image" src={image.image.image.url} />
      )
    }

    return (
      <p>Loading...</p>
    )
  };
}

function mapStateToProps(state) {
  return {
    image: state.images.image
  }
}

export default connect(mapStateToProps, { getImage })(Photo);
