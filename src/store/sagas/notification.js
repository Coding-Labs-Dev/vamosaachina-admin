/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default-member */
import { put } from 'redux-saga/effects';

import NotificationActions from '~/store/ducks/notification';

export function* notify({ data: { type, content } }) {
  yield put(NotificationActions.addNotification({ type, content }));
}
