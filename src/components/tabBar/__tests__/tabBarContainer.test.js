import React from 'react';
import { genInitialMockStore, renderWithStore } from 'test/reduxComponentTestHelpers';
import initialMockReduxStore from 'test/mockReduxStore/initialState.json';
import dataPopulatedMockReduxStore from 'test/mockReduxStore/dataPopulatedState.json';

import TabBarContainer from '../tabBarContainer';

describe('TabBarContainer', () => {
  test('not yet populated redux store', () => {
    const mockStore = genInitialMockStore(initialMockReduxStore);
    const renderer = renderWithStore(<TabBarContainer />, mockStore);
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  test('populated redux store', () => {
    const mockStore = genInitialMockStore(dataPopulatedMockReduxStore);
    const renderer = renderWithStore(<TabBarContainer />, mockStore);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
