import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import stores from './storesReducer';

export const namedReducers = {
  categories,
  stores
};

const rootReducer = combineReducers(namedReducers);

export default rootReducer;
