import React from 'react';

import { genInitialMockStore, renderWithStore } from 'test/reduxComponentTestHelpers';

import detectDevice from 'utils/detectDevice';

import StoreList from '../storeList';

const stores = [
  { id: 'id01', logoUrl: 'logoUrl01', displayText: 'displayText01' },
  { id: 'id02', logoUrl: 'logoUrl02', displayText: 'displayText02' },
  { id: 'id03', logoUrl: 'logoUrl03', displayText: 'displayText03' },
  { id: 'id04', logoUrl: 'logoUrl04', displayText: 'displayText04' },
  { id: 'id05', logoUrl: 'logoUrl05', displayText: 'displayText05' },
  { id: 'id06', logoUrl: 'logoUrl06', displayText: 'displayText06' },
  { id: 'id07', logoUrl: 'logoUrl07', displayText: 'displayText07' },
  { id: 'id08', logoUrl: 'logoUrl08', displayText: 'displayText08' },
  { id: 'id09', logoUrl: 'logoUrl09', displayText: 'displayText09' },
  { id: 'id10', logoUrl: 'logoUrl10', displayText: 'displayText10' },
  { id: 'id11', logoUrl: 'logoUrl11', displayText: 'displayText11' },
  { id: 'id12', logoUrl: 'logoUrl12', displayText: 'displayText12' }
];

describe('StoreList', () => {
  describe('display properly', () => {
    test('is mobile', () => {
      const isMobileMock = jest.spyOn(detectDevice, 'isMobile');
      isMobileMock.mockImplementation(() => true);

      const reduxStore = genInitialMockStore();
      const renderer = renderWithStore(<StoreList stores={stores} />, reduxStore);

      expect(renderer.toJSON()).toMatchSnapshot();
      isMobileMock.mockRestore();
    });

    test('is not mobile', () => {
      const isMobileMock = jest.spyOn(detectDevice, 'isMobile');
      isMobileMock.mockImplementation(() => false);

      const reduxStore = genInitialMockStore();
      const renderer = renderWithStore(<StoreList stores={stores} />, reduxStore);

      expect(renderer.toJSON()).toMatchSnapshot();
      isMobileMock.mockRestore();
    });
  });
});
