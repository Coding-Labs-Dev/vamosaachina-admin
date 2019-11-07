import React from 'react';

import { MdDashboard, MdPayment } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { Container, Logo, NavLink, ActiveBar } from './styles';

export default function Navigation() {
  return (
    <Container>
      <Logo>Vamos a China</Logo>
      <NavLink exact to="/">
        <ActiveBar />
        <MdDashboard size={22} style={{ marginRight: '15px' }} />
        Dashboard
      </NavLink>
      <NavLink to="/transacoes">
        <ActiveBar />
        <MdPayment size={22} style={{ marginRight: '15px' }} />
        Transações
      </NavLink>
      <NavLink to="/clientes">
        <ActiveBar />
        <FaUser size={22} style={{ marginRight: '15px' }} />
        Clientes
      </NavLink>
    </Container>
  );
}
