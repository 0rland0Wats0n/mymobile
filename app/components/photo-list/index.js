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
  }
  render() {
    return (
      <div className="mymobile-photo-list grid">
        {this.renderImages()}
      </div>
    )
  };
  renderImages = () => {
    if(!_.isEmpty(this.props.images)) {
      return this.props.images.images.map((image) => {
        return (
          <div className="grid-item mymobile-photo-list--image-container" key={image._id}>
            <Link to={`/image/${image._id}`}>
              <img className="mymobile-photo-list--image" src={image.image.url} onLoad={this.handleImageLoaded}/>
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
