import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { toast } from 'react-toastify';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addNotification: ['data'],
  // Saga
  notify: ['data'],
});

export const NotificationTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  id: null,
});

/* Reducers */

export const addNotification = (state, { data }) => {
  const id = toast[data.type](data.content);
  return state.merge({ id });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_NOTIFICATION]: addNotification,
});
