import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Nav, Content, AppBar, Main } from './styles';

import Navigation from './components/Navigation';
import Appbar from './components/Appbar';
import Routes from './routes';

function Admin({ navigation }) {
  return (
    <Container>
      <Nav open={navigation.open}>
        <Navigation />
      </Nav>
      <Content>
        <AppBar>
          <Appbar />
        </AppBar>
        <Main>
          <Routes />
        </Main>
      </Content>
    </Container>
  );
}

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(Admin);
