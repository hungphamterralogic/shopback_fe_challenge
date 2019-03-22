import React from 'react';

import { genInitialMockStore, renderWithStore } from 'test/reduxComponentTestHelpers';

import detectDevice from 'utils/detectDevice';
import * as categoriesAction from 'actions/categoriesAction';
import localStorage from 'utils/localStorage';

import TabItemContainer from '../tabItemContainer';

describe('TabItemContainer', () => {
  const props = {
    id: 'idTest',
    name: 'nameTest',
    iconUrl: 'iconUrlTest'
  };

  describe('display properly', () => {
    describe('is selected', () => {
      let mockStore;

      beforeAll(() => {
        mockStore = genInitialMockStore({
          'categories.selected': props.id
        });
      });

      test('is mobile', () => {
        jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => true);

        const renderer = renderWithStore(<TabItemContainer {...props} />, mockStore);
        expect(renderer.toJSON()).toMatchSnapshot();
      });

      test('is not mobile', () => {
        jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => false);

        const renderer = renderWithStore(<TabItemContainer {...props} />, mockStore);
        expect(renderer.toJSON()).toMatchSnapshot();
      });
    });

    describe('is not selected', () => {
      let mockStore;

      beforeAll(() => {
        mockStore = genInitialMockStore({
          'categories.selected': `differentThan${props.id}`
        });
      });

      test('is mobile', () => {
        jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => true);

        const renderer = renderWithStore(<TabItemContainer {...props} />, mockStore);
        expect(renderer.toJSON()).toMatchSnapshot();
      });

      test('is not mobile', () => {
        jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => false);

        const renderer = renderWithStore(<TabItemContainer {...props} />, mockStore);
        expect(renderer.toJSON()).toMatchSnapshot();
      });
    });
  });

  test('on click', () => {
    const selectCategoryMock = jest.spyOn(categoriesAction, 'selectCategory');
    const setValueIntoKeyMock = jest.spyOn(localStorage, 'setValueIntoKey');

    const mockStore = genInitialMockStore();
    const renderer = renderWithStore(<TabItemContainer {...props} />, mockStore);

    (function clickOnTabItem() {
      const tabItem = renderer.root.find(el => el.type === 'div');
      tabItem.props.onClick();
    })();

    expect(selectCategoryMock.mock.calls.length).toBe(1);
    expect(selectCategoryMock).toBeCalledWith(props.id);

    expect(setValueIntoKeyMock.mock.calls.length).toBe(1);
    expect(setValueIntoKeyMock).toBeCalledWith('category', props.id);
  });
});
