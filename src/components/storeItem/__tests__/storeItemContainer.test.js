import React from 'react';

import { genInitialMockStore, renderWithStore } from 'test/reduxComponentTestHelpers';

import * as storesAction from 'actions/storesAction';
import localStorage from 'utils/localStorage';

import StoreItemContainer from '../storeItemContainer';

describe('StoreItemContainer', () => {
  const item = {
    id: 'idTest',
    logoUrl: 'logoUrlTest',
    displayText: 'displayTextTest'
  };

  test('display properly', () => {
    const store = genInitialMockStore();
    const renderer = renderWithStore(<StoreItemContainer item={item} />, store);

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  test('on click', () => {
    const selectStoreMock = jest.spyOn(storesAction, 'selectStore');
    const setValueIntoKeyMock = jest.spyOn(localStorage, 'setValueIntoKey');

    const store = genInitialMockStore();
    const renderer = renderWithStore(<StoreItemContainer item={item} />, store);

    (function clickOnStoreItem() {
      const storeItem = renderer.root.find(el => el.type === 'div');
      storeItem.props.onClick();
    })();

    expect(selectStoreMock.mock.calls.length).toBe(1);
    expect(selectStoreMock).toBeCalledWith(item.id);

    expect(setValueIntoKeyMock.mock.calls.length).toBe(1);
    expect(setValueIntoKeyMock).toBeCalledWith('store', item.id);
  });
});
