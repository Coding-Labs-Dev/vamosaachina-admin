import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  // Duck
  toggleMenu: null,
});

export const NavigationTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  open: true,
};

/* Reducers */

export const toggleMenu = state => {
  return { open: !state.open };
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_MENU]: toggleMenu,
});
