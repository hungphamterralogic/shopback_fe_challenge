import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import storesReducer from './storesReducer';

export default combineReducers({
  categories: categoriesReducer,
  stores: storesReducer
});
