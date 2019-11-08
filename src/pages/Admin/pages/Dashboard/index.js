import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TransactionsActions from '~/store/ducks/Admin/transactions';
import ClientsActions from '~/store/ducks/Admin/clients';
import Loader from '~/components/Loader';

import {
  Container,
  Title,
  Header,
  CardsContainer,
  Card,
  CardTitle,
  CardValue,
} from './styles';

function Dashboard({ transactions, clients, getTransactions, getClients }) {
  useEffect(() => {
    getTransactions();
    getClients();
  }, [getTransactions, getClients]);

  return (
    <>
      {transactions.loading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <Title>Dashboard</Title>
          </Header>
          <Container>
            <CardsContainer>
              <Card>
                <CardTitle>Clientes</CardTitle>
                <CardValue>{clients.clients.length}</CardValue>
              </Card>
              <Card>
                <CardTitle>Transações Pagas</CardTitle>
                <CardValue>
                  {
                    transactions.transactions.filter(({ status }) => {
                      return ['Disponível', 'Paga'].includes(status);
                    }).length
                  }
                </CardValue>
              </Card>
              <Card>
                <CardTitle>Transações Pendentes</CardTitle>
                <CardValue>
                  {
                    transactions.transactions.filter(({ status }) => {
                      return ['Aguardando', 'Em análise'].includes(status);
                    }).length
                  }
                </CardValue>
              </Card>
              <Card>
                <CardTitle>Transações Canceladas</CardTitle>
                <CardValue>
                  {
                    transactions.transactions.filter(({ status }) => {
                      return ['Devolvida', 'Cancelada'].includes(status);
                    }).length
                  }
                </CardValue>
              </Card>
            </CardsContainer>
          </Container>
        </>
      )}
    </>
  );
}

Dashboard.propTypes = {
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
)(Dashboard);
