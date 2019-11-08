import { all, takeLatest } from 'redux-saga/effects';

// ! Notifications
import { notify } from './notification';
import { NotificationTypes } from '~/store/ducks/notification';
// ! Auth
import { signIn, signOut, verifySession } from './auth';
import { AuthTypes } from '~/store/ducks/auth';
// ! Transactions
import { getTransactions } from './Admin/transactions';
import { TransactionsTypes } from '~/store/ducks/Admin/transactions';
// ! Clients
import { getClients } from './Admin/clients';
import { ClientsTypes } from '~/store/ducks/Admin/clients';

export default function* rootSaga() {
  return yield all([
    // ! Notifications
    takeLatest(NotificationTypes.NOTIFY, notify),
    // ! Auth
    takeLatest(AuthTypes.SIGN_IN, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.VERIFY_SESSION, verifySession),
    // ! Transactions
    takeLatest(TransactionsTypes.GET_TRANSACTIONS, getTransactions),
    // ! Clients
    takeLatest(ClientsTypes.GET_CLIENTS, getClients),
  ]);
}
