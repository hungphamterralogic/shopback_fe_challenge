import React from 'react';

import { genInitialMockStore, renderWithStore } from '../../../test/reduxComponentTestHelpers';

import StupidComponentContainer from '../StupidComponentTestContainer';

describe('StupidComponentContainer', () => {
  test('def', () => {
    const store = genInitialMockStore({
      'stores.message': 'hi there'
    });
    expect(renderWithStore(<StupidComponentContainer />, store)).toMatchSnapshot();
  });
});
