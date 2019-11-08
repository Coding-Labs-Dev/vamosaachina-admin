import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import TransactionsActions from '~/store/ducks/Admin/transactions';
import ClientsActions from '~/store/ducks/Admin/clients';
import Loader from '~/components/Loader';

import Table, {
  ExpandedTitle,
  ExpandedText,
} from '~/pages/Admin/components/Table';

import { Container, Title, Header, Expanded, Row, Column } from './styles';

function Clients({ transactions, clients, getTransactions, getClients }) {
  useEffect(() => {
    getTransactions();
    getClients();
  }, [getTransactions, getClients]);

  const columns = [
    {
      name: 'Nome',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'CPF',
      selector: 'cpf',
      sortable: true,
    },
    {
      name: 'E-mail',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Telefone',
      selector: 'phone',
      sortable: true,
    },
  ];

  const ExpandedComponent = ({ data }) => {
    const headers = [
      {
        name: 'Nome',
        selector: 'name',
      },
      {
        name: 'CPF',
        selector: 'cpf',
      },
      {
        name: 'E-mail',
        selector: 'email',
      },
      {
        name: 'Telefone',
        selector: 'phone',
      },
      {
        name: 'Data de Nascimento',
        selector: 'dob',
        cell: row => moment(row.dob).format('DD/MM/YYYY'),
      },
      {
        name: 'Endereço',
        selector: 'street',
        cell: row => {
          const {
            street,
            number,
            complement,
            district,
            city,
            state,
            postalCode,
          } = row;
          return (
            <>
              <div>
                {street}, {number}
              </div>
              <div>{complement}</div>
              <div>
                {district}, {city}, {state}
              </div>
              <div>CEP: {postalCode}</div>
            </>
          );
        },
      },
      {
        name: 'Transações atreladas',
        selector: 'transactions',
        cell: row =>
          row.transactions.map(transaction => <div>{transaction}</div>),
      },
    ];
    return (
      <>
        <ExpandedTitle>Detalhes</ExpandedTitle>
        <Expanded>
          {headers.map(({ name, selector, cell }) => {
            const value = data[selector];
            return (
              <Row>
                <Column header>{name}</Column>
                <Column>
                  <ExpandedText>{cell ? cell(data) : value}</ExpandedText>
                </Column>
              </Row>
            );
          })}
        </Expanded>
      </>
    );
  };

  return (
    <>
      {clients.loading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <Title>Clientes</Title>
          </Header>
          <Container>
            <Table
              columns={columns}
              data={clients.clients}
              defaultSortField="name"
              expandableRowsComponent={<ExpandedComponent />}
              expandOnRowClicked
              expandableRows
              highlightOnHover
              pointerOnHover
            />
          </Container>
        </>
      )}
    </>
  );
}

Clients.propTypes = {
  transactions: PropTypes.shape().isRequired,
  clients: PropTypes.shape().isRequired,
  getTransactions: PropTypes.func.isRequired,
  getClients: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  clients: state.clients,
  transactions: state.transactions,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...TransactionsActions, ...ClientsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
