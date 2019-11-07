import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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

function Login({ auth, signIn }) {
  const [data, setData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setData(p => ({ ...p, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    signIn(data.username, data.password);
  }

  return (
    <Container>
      <LoginBox>
        {auth.isAuth && <Redirect to="/" />}
        {auth.loading ? (
          <Loader
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        ) : (
          <>
            <Logo>Vamos a China</Logo>
            <Form onSubmit={handleSubmit}>
              <Field>
                <Label>Nome de Usuário</Label>
                <Input
                  name="username"
                  type="text"
                  value={data.username || ''}
                  onChange={handleChange}
                  error={auth.error}
                />
              </Field>
              <Field>
                <Label>Senha</Label>
                <Input
                  name="password"
                  type="password"
                  value={data.password || ''}
                  onChange={handleChange}
                  error={auth.error}
                />
              </Field>
              <Field>
                <Submit />
              </Field>
            </Form>
          </>
        )}
      </LoginBox>
    </Container>
  );
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
