require('./login.css');

import React, { Component, PropTypes } from 'react';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import Isvg from 'react-inlinesvg';

import Footer from '../common-ui/footer/index';

import { login } from '../../actions/index';

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    console.log(cookie.load('xt'));
  }
  handleLogin = (props) => {
    this.props.login(props)
      .then((data) => {
        if(data.payload.data.error) {
          console.log('Login failed.');
          return;
        }

        cookie.save('xt', data.payload.data.token, { expires: new Date(new Date().getTime() + (24*60*60*1000)) });
        this.context.router.push('/');
      });
  }
  render() {
    const { fields: { username, password }, handleSubmit } = this.props;

    return (
      <div className="mymobile-login-form--container">
        <form className="mymobile-login-form" onSubmit={handleSubmit(this.handleLogin)}>
          <div className="form-group">
            <Link to="/" className="mymobile-inline-anchor">
              <Isvg src="/images/mymobile.svg" className="mymobile-login-form--logo" />
            </Link>
            <h3 className="mymobile-login-form--heading">Login</h3>
          </div>
          <div className="form-group">
            <input className="mymobile-form--input" type="text" {...username}/>
            <label className="mymobile-form--label">Username</label>
          </div>
          <div className="form-group">
            <input className="mymobile-form--input" type="password" {...password}/>
            <label className="mymobile-form--label">Password</label>
          </div>
          <div className="form-group">
            <input className="mymobile-form--input" type="submit" />
          </div>
        </form>
        <Footer />
      </div>
    )
  }
}

function validate() {
  return;
}

function mapStateToProps(state) {
  return {
    user: state.login
  }
}

export default reduxForm({
  form: 'Login',
  fields: ['username', 'password'],
  validate
}, mapStateToProps, { login })(Login);
