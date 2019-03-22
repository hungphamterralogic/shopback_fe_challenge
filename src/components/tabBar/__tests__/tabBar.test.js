import React from 'react';
import { genInitialMockStore, renderWithStore } from 'test/reduxComponentTestHelpers';

import TabBar from '../tabBar';

const categories = [
  { id: 'id01', name: 'name01', iconUrl: 'iconUrl01' },
  { id: 'id02', name: 'name02', iconUrl: 'iconUrl02' },
  { id: 'id03', name: 'name03', iconUrl: 'iconUrl03' },
  { id: 'id04', name: 'name04', iconUrl: 'iconUrl04' }
];

describe('TabBar', () => {
  test('display properly', () => {
    const mockStore = genInitialMockStore();
    const renderer = renderWithStore(<TabBar categories={categories} />, mockStore);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
