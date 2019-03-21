/* eslint-disable radix */
import { handleActions } from 'redux-actions';
import { getValueFromKey } from '../utils/localStorage';

const initialState = {
  list: [],
  error: null,
  selected: parseInt(getValueFromKey('category')) || 0
};

export default handleActions(
  {
    CATEGORIES_INIT: (state, action) => ({
      ...state,
      list: state.list.concat(
        action.payload.map(category => ({ ...category, priority: category.priority || 0 }))
      )
    }),
    CATEGORY_SELECT: (state, action) => ({ ...state, selected: action.payload })
  },
  initialState
);
