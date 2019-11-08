import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  height: 100%;
  width: 60px;
  background: none;
  border: none;
  outline: 0;
  cursor: pointer;
  transition: all 0.25s ease;
  color: ${({ theme }) => theme.darkBackground};
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  ${props =>
    props.logout &&
    css`
      position: absolute;
      right: 0;
    `}
`;
