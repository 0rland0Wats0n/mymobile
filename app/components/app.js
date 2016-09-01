require('./app.css');

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="mymobile"
          transitionAppear={true}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={300}>
        {this.props.children}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
