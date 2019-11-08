import { combineReducers } from 'redux';

import { reducer as notification } from '~/store/ducks/notification';
import { reducer as auth } from '~/store/ducks/auth';
import { reducer as transactions } from '~/store/ducks/Admin/transactions';
import { reducer as clients } from '~/store/ducks/Admin/clients';
import { reducer as navigation } from '~/store/ducks/Admin/navigation';

export default () =>
  combineReducers({
    notification,
    auth,
    transactions,
    clients,
    navigation,
  });
