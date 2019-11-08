import styled, { css } from 'styled-components';
import DataTable from 'react-data-table-component';

// rdt_Table;
// rdt_TableRow;
// rdt_TableCol;
// rdt_TableCol_Sortable;
// rdt_TableCell;
// rdt_TableHeader;
// rdt_TableFooter;
// rdt_TableHead;
// rdt_TableHeadRow;
// rdt_TableBody;
// rdt_ExpanderRow;

const Table = styled(DataTable)`
  .rdt_TableHeader {
    display: none;
  }
  .rdt_TableHead {
    font-family: 'Montserrat', 'sans-serif';
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    div {
      font-weight: 500;
    }
  }
  /* .rdt_ExpanderRow {
    background-color: ${({ theme }) => theme.rowHover};
  } */
`;

export const NestedTable = styled(Table)`
  .rdt_Table {
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; */
    padding-bottom: 50px;
    /* .rdt_TableHead,
    .rdt_TableBody {
      width: 50%;
    } */
  }
`;

export const ExpandedTitle = styled.div`
  display: block;
  font-family: 'Quicksand', 'sans-serif';
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.075rem;
  color: ${({ theme }) => theme.primary};
  padding: 25px 0 0 25px;
`;
export const ExpandedSubTitle = styled(ExpandedTitle)`
  font-size: 1rem;
  text-transform: none;
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.secondary};
`;

export const ExpandedText = styled(ExpandedTitle)`
  font-size: 0.9rem;
  text-transform: none;
  color: ${({ theme }) => theme.text};
`;

export const Label = styled.label`
  padding: 5px 10px;
  border-radius: 25px;
  color: ${({ theme }) => theme.light};
  background: ${({ theme }) => theme.darkBackground};
  ${props =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.primary};
    `}
  ${props =>
    props.secondary &&
    css`
      background: ${({ theme }) => theme.secondary};
    `}
  ${props =>
    props.alert &&
    css`
      background: ${({ theme }) => theme.alert};
    `}
  ${props =>
    props.warning &&
    css`
      background: ${({ theme }) => theme.warning};
    `}
  ${props =>
    props.success &&
    css`
      background: ${({ theme }) => theme.success};
    `}
  ${props =>
    props.tertiary &&
    css`
      background: ${({ theme }) => theme.lightText};
    `}
`;

export default Table;
