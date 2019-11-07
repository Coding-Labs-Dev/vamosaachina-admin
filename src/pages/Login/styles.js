import styled, { css } from 'styled-components';

import background from '~/images/background.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${`url(${background})`};
  background-size: cover;
  background-repeat: no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
  padding: 25px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  padding: 0 25px;
`;
export const Label = styled.label`
  display: block;
  width: 100%;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 0.6em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.darkBackground};
  margin-bottom: 5px;
  padding-left: 5px;
  width: 100%;
  text-align: left;
`;
export const Input = styled.input`
  padding: 10px 15px;
  width: 100%;
  background: none;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  outline: 0;
  font-family: 'Quicksand', 'sans-serif';
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  ${props =>
    props.error &&
    css`
      border-color: ${({ theme }) => theme.alert};
    `};
`;
export const Submit = styled.input.attrs({
  type: 'submit',
  value: 'Entrar',
})`
  height: 50px;
  border-radius: 4px;
  width: 100%;
  margin-top: 25px;
  font-family: 'Montserrat', 'sans-serif';
  text-transform: uppercase;
  background: ${({ theme }) => theme.lightText};
  border: 0;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.25s ease;
  outline: 0;
  &:hover {
    background: ${({ theme }) => theme.success};
    color: ${({ theme }) => theme.light};
  }
`;
