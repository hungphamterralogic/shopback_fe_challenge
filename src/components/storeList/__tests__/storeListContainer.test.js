import React from 'react';
import { genInitialMockStore, renderWithStore } from '../../../test/reduxComponentTestHelpers';

import StoreListContainer from '../storeListContainer';

import notYetPopulatedMockReduxStore from './notYetPopulatedMockReduxStore.json';
import populatedMockReduxStore from './populatedMockReduxStore.json';

describe('StoreListContainer', () => {
  test('not yet populated redux store', () => {
    const mockStore = genInitialMockStore(notYetPopulatedMockReduxStore);
    const renderer = renderWithStore(<StoreListContainer />, mockStore);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
  test('populated redux store', () => {
    const mockStore = genInitialMockStore(populatedMockReduxStore);
    const renderer = renderWithStore(<StoreListContainer />, mockStore);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
