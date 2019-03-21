import configureMockStore from 'redux-mock-store';

export default (...args) => {
  const middlewares = [];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(...args);
  return store;
};
