import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Nav = styled.nav`
  width: ${props => (props.open ? 0 : '320px')};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: ${({ theme }) => theme.darkBackground};
  z-index: 1;
  overflow: hidden;
  @media screen and (min-width: 576px) {
    width: ${props => (props.open ? '320px' : 0)};
    position: relative;
  }
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
  border-bottom: 1px solid ${({ theme }) => theme.lightText};
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
