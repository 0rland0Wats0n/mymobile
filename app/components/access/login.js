import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { isLoggedIn } from '../../actions/index';

class Login extends Component {
  componentWillMount() {
    this.props.isLoggedIn();
  }
  render() {
    return (
      <div>Login</div>
    )
  }
}

export default connect(null, { isLoggedIn })(Login);
