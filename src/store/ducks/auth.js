import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  // Sagas
  signIn: ['username', 'password', 'saveSession'],
  verifySession: null,
  signOut: null,
  // Duck
  response: ['data'],
  clearErrors: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  isAuth: false,
  initLoading: true,
  loading: false,
  error: false,
});

/* Reducers */
export const response = (state, { data }) => {
  return state.merge({ ...data });
};

export const clearErrors = state => {
  return state.merge({ ...state, error: false });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESPONSE]: response,
  [Types.CLEAR_ERRORS]: clearErrors,
});
