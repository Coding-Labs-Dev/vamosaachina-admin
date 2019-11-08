import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';

import AuthActions from '~/store/ducks/auth';
import NavigationActions from '~/store/ducks/Admin/navigation';

import { Container, Button } from './styles';

function Appbar({ signOut, toggleMenu, history }) {
  function handleSignOut(e) {
    e.preventDefault();
    signOut();
    return history.push('/');
  }
  return (
    <Container>
      <Button onClick={toggleMenu} style={{ zIndex: 1 }}>
        <AiOutlineMenu size={22} />
      </Button>
      <Button logout onClick={handleSignOut}>
        <AiOutlineLogout size={22} />
      </Button>
    </Container>
  );
}

Appbar.propTypes = {
  signOut: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions, ...NavigationActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Appbar));
