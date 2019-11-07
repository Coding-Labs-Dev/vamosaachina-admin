import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AuthActions from '~/store/ducks/auth';

import Loader from '~/components/Loader';

import {
  Container,
  LoginBox,
  Logo,
  Form,
  Field,
  Label,
  Input,
  Submit,
} from './styles';

function Login({ auth, signIn, clearErrors }) {
  return <Container>Dashboard</Container>;
}

Login.propTypes = {
  auth: PropTypes.shape().isRequired,
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
