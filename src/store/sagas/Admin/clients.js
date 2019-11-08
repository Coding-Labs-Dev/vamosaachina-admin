/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default-member */
import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import ClientsActions from '~/store/ducks/Admin/clients';
import NotificationActions from '~/store/ducks/notification';

export function* getClients({ id }) {
  yield put(ClientsActions.response({ loading: true }));
  try {
    const response = yield call([api, api.getClients], id);

    return yield put(ClientsActions.response({ ...response, loading: false }));
  } catch (err) {
    yield put(
      ClientsActions.response({
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
