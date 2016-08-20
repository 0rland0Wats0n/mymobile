require('./photo-list.css');

import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getImages } from '../../actions/index';

class PhotoList extends Component {
  componentWillMount() {
    this.props.getImages();
  };
  render() {
    return (
      <div className="mymobile-photo-list grid"
          data-isotope='{"itemSelector": ".grid-item"}'>
        {this.renderImages()}
      </div>
    )
  };
  renderImages = () => {
    if(!_.isEmpty(this.props.images)) {
      return this.props.images.images.map((image) => {
        return (
          <div className="grid-item" key={image._id}>
            <img className="mymobile-photo-list--image " src={image.image.url} />
          </div>
        )
      });
    }
    return;
  };
}

function mapStateToProps(state) {
  return {
    images: state.images.all
  };
};

export default connect(mapStateToProps, { getImages })(PhotoList);
