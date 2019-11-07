import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import AuthActions from '~/store/ducks/auth';

import Loader from './components/Loader';

const MainContainer = styled.section`
  height: 100%;
  width: 100%;
`;

function App({ auth, verifySession, children }) {
  useEffect(() => {
    verifySession();
  }, [verifySession]);

  return (
    <MainContainer>{auth.initLoading ? <Loader /> : children}</MainContainer>
  );
}

App.propTypes = {
  verifySession: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  auth: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
