import cloneDeep from 'lodash.clonedeep';
import lodashSet from 'lodash.set';
import { namedReducers } from '../reducers/rootReducer';

export default extend => {
  const initialState = {};
  Object.keys(namedReducers).forEach(reducerName => {
    initialState[reducerName] = namedReducers[reducerName](undefined, { type: '@@INIT' });
  });
  const newInitialState = cloneDeep(initialState);
  if (extend) {
    Object.keys(extend).forEach(key => {
      lodashSet(newInitialState, key, extend[key]);
    });
  }
  return newInitialState;
};
