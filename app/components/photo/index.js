require('./photo.css');

import _ from 'underscore';
import $ from 'jquery';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../common-ui/footer/index';
import Header from '../photo-header/index';
import { getImage } from '../../actions/index';

class Photo extends Component {
  componentWillMount() {
    this.props.getImage(this.props.params.id);
  };
  createImageUrl(image) {
    return `${image.url.split('upload')[0]}upload/q_50,f_auto/v${image.version}/${image.public_id}.${image.format}`;
  };
  render() {
    if(this.props.image) {
      return (
        <div>
          <Header data={this.props.image} />
          <div className="mymobile-loading">
            <img src="/images/loading.gif" />
          </div>
          <div className="mymobile-photo--container">
            {this.renderImage()}
          </div>
          <Footer />
        </div>
      )
    }

    return (
      <div className="mymobile-loading">
        <img src="/images/loading.gif" />
      </div>
    )
  };
  renderImage = () => {
    const image = this.props.image;

    if(!_.isEmpty(image)) {
      return (
        <div className="mymobile-photo--image-container">
          <img className="mymobile-photo--image is-hidden" src={this.createImageUrl(image.image.image)} onLoad={this.handleImageLoad} />
        </div>
      )
    }

    return (
      <p>Loading...</p>
    )
  };
  handleImageLoad = () => {
    $('.mymobile-photo--image').removeClass('is-hidden');
    $('.mymobile-loading').addClass('is-loaded');
  };
  handleWindowResize = () => {
    const height = $(window).height();
    const width = $(window).width();
    const imageWidth = this.props.image.image.image.width;
    const imageHeight = this.props.image.image.image.height;

    if(imageWidth >= imageHeight) {
      $(".mymobile-photo--image").css({"width": `${width}px`, "height": "auto", "max-width": "100%"});
    } else {
      $(".mymobile-photo--image").css({"height": `${height - 42}px`, "width": "auto"});
    }
  }
}

function mapStateToProps(state) {
  return {
    image: state.images.image
  }
}

export default connect(mapStateToProps, { getImage })(Photo);
