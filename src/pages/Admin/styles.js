import styled, { css } from 'styled-components';

import background from '~/images/background.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Nav = styled.nav`
  width: 320px;
  height: 100%;
  background: ${({ theme }) => theme.darkBackground};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const AppBar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
