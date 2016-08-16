require('./login.css');

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { isLoggedIn } from '../../../actions/index';

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
      <div className="ptc-container ptc-container--full-page">
        <form className="ptc-form ptc-form--login-form">
            <div className="ptc-form--heading">
              <Link to='/'>
                <img className="ptc-form--heading-logo" src="/images/logo-small-round.png" />
              </Link>
              <h1 className="ptc-form--heading-text">Login</h1>
            </div>
            <input className="ptc-form--input" type="email" placeholder="Email"/>
            <input className="ptc-form--input" type="password" placeholder="Password" />
            <button type="submit" className="ptc-form--submit-button">Login</button>
            <div className="ptc-form--additional-info">
              <p>Don't have an account, <Link to="/signup">sign up here</Link>.</p>
            </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { isLoggedIn })(Login);
