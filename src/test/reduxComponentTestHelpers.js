import React from 'react';
import { Provider } from 'react-redux';
import ReactTestRenderer from 'react-test-renderer';
import createMockStore from './createMockStore';
import generateInitialState from './generateInitialState';

export const genInitialMockStore = (extend = {}) => {
  const mockStore = createMockStore(generateInitialState(extend));
  return mockStore;
};

export const renderWithStore = (component, store) => {
  return ReactTestRenderer.create(<Provider store={store}>{component}</Provider>);
};
