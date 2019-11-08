import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 100px);
  height: 100%;
  padding: 50px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme.light};
  box-shadow: 1px 1px 10px 3px ${({ theme }) => theme.shadow};
`;

export const Header = styled.div`
  width: 100%;
  padding: 50px;
`;

export const Title = styled.h1`
  font-family: 'Quicksand', 'sans-serif';
  font-size: 2rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
`;

export const NoRecords = styled.h1`
  font-family: 'Quicksand', 'sans-serif';
  font-size: 1.25rem;
  letter-spacing: 0.05rem;
  /* text-transform: uppercase; */
  padding: 25px 0;
  color: ${({ theme }) => theme.lightText};
`;
