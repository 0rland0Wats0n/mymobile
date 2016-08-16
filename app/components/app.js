import React, { Component } from 'react';

import Footer from './common-ui/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
