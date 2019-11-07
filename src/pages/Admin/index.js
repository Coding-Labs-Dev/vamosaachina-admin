import React from 'react';

import { Container, Nav, Content, AppBar, Main } from './styles';

import Navigation from './components/Navigation';
import Routes from './routes';

export default function Admin() {
  return (
    <Container>
      <Nav>
        <Navigation />
      </Nav>
      <Content>
        <AppBar />
        <Main>
          <Routes />
        </Main>
      </Content>
    </Container>
  );
}
