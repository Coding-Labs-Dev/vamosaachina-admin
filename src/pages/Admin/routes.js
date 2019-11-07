import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '~/pages/Admin/pages/Dashboard';
import Transactions from '~/pages/Admin/pages/Transactions';
import Clients from '~/pages/Admin/pages/Clients';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/transacoes" component={Transactions} />
      <Route path="/clientes" component={Clients} />
    </Switch>
  );
}
