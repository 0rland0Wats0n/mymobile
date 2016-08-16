import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { isLoggedIn } from '../../actions/index';

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    if(this.props.isLoggedIn().payload.data) {
      this.context.router.push('/');
    }
  }
  render() {
    return (
      <div className="full-page-container">
        
      </div>
    )
  }
}

export default connect(null, { isLoggedIn })(Login);
