import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 25px 0;
`;

export const Logo = styled.h1`
  font-family: 'Permanent Marker', 'sans-serif';
  font-size: 2.2rem;
  margin: 20px 0;
  color: ${({ theme }) => theme.text};
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
`;

export const NavLink = styled(Link)`
  width: 100%;
  height: 60px;
  padding: 10px 0;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.lightText};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.25s ease;
  &.active,
  &:hover {
    color: ${({ theme }) => theme.primary};
    div {
      opacity: 1;
    }
  }
`;

export const ActiveBar = styled.div`
  width: 5px;
  height: 100%;
  margin-right: 25px;
  background-color: ${({ theme }) => theme.primary};
  opacity: 0;
  transition: 0.25s ease;
`;
