/* eslint-disable radix */
import { handleActions } from 'redux-actions';
import { getValueFromKey } from '../utils/localStorage';

const initialState = {
  list: [],
  error: null,
  selected: parseInt(getValueFromKey('store')) || 0
};

export default handleActions(
  {
    STORES_INIT: (state, action) => ({
      ...state,
      list: state.list.concat(
        action.payload.map(store => ({ ...store, priority: store.priority || 0 }))
      )
    }),
    STORE_SELECT: (state, action) => ({ ...state, selected: action.payload })
  },
  initialState
);
