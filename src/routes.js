import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from '~/pages/Login';
import Admin from '~/pages/Admin';

function Routes({ auth }) {
  return auth.isAuth ? (
    <Switch>
      <Route path="/" component={Admin} />
    </Switch>
  ) : (
    <Login />
  );
}

Routes.propTypes = {
  auth: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null
)(Routes);
