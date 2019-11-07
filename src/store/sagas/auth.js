/* eslint-disable import/no-named-as-default-member */
import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import AuthActions from '~/store/ducks/auth';
import NotificationActions from '~/store/ducks/notification';

export function* signIn({ username, password, saveSession }) {
  yield put(AuthActions.response({ loading: true }));
  try {
    if (!username || !password) {
      const err = { code: 400, message: 'Digite o usuário e senha' };
      throw err;
    }

    const { isAuth } = yield call([api, api.signIn], {
      username,
      password,
      saveSession,
    });

    return yield put(AuthActions.response({ isAuth, loading: false }));
  } catch (err) {
    yield put(
      AuthActions.response({
        loading: false,
        error: true,
      })
    );
    if (err.code === 401) {
      return yield put(
        NotificationActions.notify({
          type: 'error',
          content: 'Usuário e senha inválidos',
        })
      );
    }
    return yield put(
      NotificationActions.notify({
        type: 'error',
        content: err.message,
      })
    );
  }
}

export function* verifySession() {
  try {
    const response = yield call([api, api.verifySession]);
    return yield put(AuthActions.response({ ...response, initLoading: false }));
  } catch (error) {
    return yield put(
      AuthActions.response({ isAuth: false, initLoading: false })
    );
  }
}

export function* signOut() {
  const response = yield call([api, api.signOut]);
  yield put(AuthActions.signOut({ ...response }));
}
