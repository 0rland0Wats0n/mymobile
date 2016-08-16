import React, { Component } from 'react';

import Footer from './common-ui/footer';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
