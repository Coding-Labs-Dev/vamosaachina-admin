import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 100px);
  height: 100%;
  padding: 0 50px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* box-shadow: 1px 1px 10px 3px ${({ theme }) => theme.shadow}; */
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

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 50px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.light};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 10px 3px ${({ theme }) => theme.shadow};
`;

export const CardTitle = styled.h2`
  font-family: 'Montserrat', 'sans-serif';
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const CardValue = styled.h1`
  font-family: 'Quicksand', 'sans-serif';
  font-size: 2rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 25px 0;
`;
