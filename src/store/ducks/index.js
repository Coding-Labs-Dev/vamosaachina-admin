import { combineReducers } from 'redux';

import { reducer as notification } from '~/store/ducks/notification';
import { reducer as auth } from '~store/ducks/auth';

export default () =>
  combineReducers({
    notification,
    auth,
  });
