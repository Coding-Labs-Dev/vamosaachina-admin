/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default-member */
import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import TransactionsActions from '~/store/ducks/Admin/transactions';
import NotificationActions from '~/store/ducks/notification';

export function* getTransactions({ id }) {
  yield put(TransactionsActions.response({ loading: true }));
  try {
    const response = yield call([api, api.getTransactions], id);

    return yield put(
      TransactionsActions.response({ ...response, loading: false })
    );
  } catch (err) {
    yield put(
      TransactionsActions.response({
        loading: false,
        error: true,
      })
    );
    return yield put(
      NotificationActions.notify({
        type: 'error',
        content: err.message,
      })
    );
  }
}
