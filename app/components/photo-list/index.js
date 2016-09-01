require('./photo-list.css');

import _ from 'underscore';
import $ from 'jquery';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getImages } from '../../actions/index';

class PhotoList extends Component {
  initializeIsotope() {
    imagesLoaded($('.grid'), function() {
       const $grid =  new Isotope('.grid', {
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
          columnWidth: 10
        }
      });
    });
  }
  componentWillMount() {
    this.props.getImages();
  };
  componentDidMount() {
    this.initializeIsotope();
  }
  handleImageLoaded = () => {
    this.initializeIsotope();

    $('.mymobile-photo--image').removeClass('is-hidden');
  }
  createImageUrl(image) {
    return `${image.url.split('upload')[0]}upload/q_40/v${image.version}/${image.public_id}.${image.format}`;
  }
  render() {
    return (
      <div className="mymobile-photo-list grid">
        {this.renderImages()}
      </div>
    )
  }
  renderImages = () => {
    if(!_.isEmpty(this.props.images)) {
      return this.props.images.images.map((image) => {
        return (
          <div className="grid-item mymobile-photo-list--image-container" key={image._id}>
            <Link to={`/image/${image._id}`}>
              <p className="mymobile-photo-list--view-cta">View</p>
              <img className="mymobile-photo-list--image mymobile-photo--image is-hidden"
                  src={this.createImageUrl(image.image)}
                  onLoad={this.handleImageLoaded}/>
            </Link>
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
