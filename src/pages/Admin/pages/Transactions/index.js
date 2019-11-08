import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import TransactionsActions from '~/store/ducks/Admin/transactions';
import ClientsActions from '~/store/ducks/Admin/clients';
import Loader from '~/components/Loader';
import Table, {
  NestedTable,
  Label,
  ExpandedTitle,
  ExpandedSubTitle,
  ExpandedText,
} from '~/pages/Admin/components/Table';

import { Container, Title, Header, NoRecords } from './styles';

function Transactions({ transactions, clients, getTransactions, getClients }) {
  useEffect(() => {
    getTransactions();
    getClients();
  }, [getTransactions, getClients]);

  const columns = [
    {
      name: 'Data',
      selector: 'data',
      sortable: true,
      format: row => moment(row.data).format('DD/MM/YYYY'),
    },
    {
      name: 'Referência',
      selector: 'reference',
      sortable: true,
    },
    {
      name: 'Cliente',
      selector: 'client',
      sortable: true,
      cell: row => {
        const result = clients.clients.filter(client => {
          return client.id === row.client;
        });
        return result[0] ? result[0].name : row.client;
      },
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      cell: row => {
        const { status } = row;
        if (status === 'Em análise') return <Label secondary>{status}</Label>;
        if (['Disponível', 'Paga'].includes(status))
          return <Label success>{status}</Label>;
        if (status === 'Em disputa') return <Label warning>{status}</Label>;
        if (status === 'Cancelada') return <Label alert>{status}</Label>;
        if (status === 'Devolvida') return <Label tertiary>{status}</Label>;
        return <Label>{status}</Label>;
      },
    },
    {
      name: 'Meio de Pagamento',
      selector: 'paymentMethod',
      sortable: true,
      center: true,
      cell: row =>
        row.paymentMethod === 'bankTicket' ? (
          <Label secondary>Boleto Bancário</Label>
        ) : (
          <Label primary>Cartão de Crédito</Label>
        ),
    },
    {
      name: 'Valor',
      selector: 'grossAmount',
      sortable: true,
      right: true,
      cell: row => `R$ ${row.grossAmount.toFixed(2).replace('.', ',')}`,
    },
    {
      name: 'Taxa',
      selector: 'feeAmount',
      sortable: true,
      right: true,
      cell: row => `R$ ${row.feeAmount.toFixed(2).replace('.', ',')}`,
    },
    {
      name: 'Líquido',
      selector: 'netAmount',
      sortable: true,
      right: true,
      cell: row => `R$ ${row.netAmount.toFixed(2).replace('.', ',')}`,
    },
  ];

  const ExpandedComponent = row => {
    const { data } = row;
    return (
      <>
        <ExpandedTitle>Detalhes da Transação</ExpandedTitle>
        <ExpandedSubTitle>Código PagSeguro</ExpandedSubTitle>
        <ExpandedText>{data.code}</ExpandedText>
        <ExpandedSubTitle>Histórico</ExpandedSubTitle>
        <NestedTable
          noDataComponent={<NoRecords>Sem informações</NoRecords>}
          columns={[
            {
              name: 'Data e Hora',
              selector: 'data',
              sortable: true,
              format: innerRow =>
                moment(innerRow.data).format('DD/MM/YYYY  HH:mm:ss'),
            },
            {
              name: 'Status',
              selector: 'status',
              sortable: true,
              cell: innerRow => {
                const { status } = innerRow;
                if (status === 'Em análise')
                  return <Label secondary>{status}</Label>;
                if (['Disponível', 'Paga'].includes(status))
                  return <Label success>{status}</Label>;
                if (status === 'Em disputa')
                  return <Label warning>{status}</Label>;
                if (status === 'Cancelada')
                  return <Label alert>{status}</Label>;
                if (status === 'Devolvida')
                  return <Label tertiary>{status}</Label>;
                return <Label>{status}</Label>;
              },
            },
          ]}
          data={data.history}
        />
      </>
    );
  };

  return (
    <>
      {transactions.loading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <Title>Transações</Title>
          </Header>
          <Container>
            <Table
              columns={columns}
              data={transactions.transactions}
              defaultSortField="data"
              expandableRowsComponent={<ExpandedComponent />}
              noDataComponent={<NoRecords>Sem informações</NoRecords>}
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

Transactions.propTypes = {
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
)(Transactions);
