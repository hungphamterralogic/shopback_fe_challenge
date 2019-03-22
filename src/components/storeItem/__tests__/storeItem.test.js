import React from 'react';

import ReactTestRenderer from 'react-test-renderer';

import detectDevice from 'utils/detectDevice';

import StoreItem from '../storeItem';

const id = 'idTest';
const item = {
  id,
  logoUrl: 'logoUrlTest',
  displayText: 'displayTextTest'
};

describe('StoreItem', () => {
  describe('display properly', () => {
    test('is mobile', () => {
      jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => true);

      const selectStore = () => {};
      const renderer = ReactTestRenderer.create(
        <StoreItem item={item} selectStore={selectStore} />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });

    test('is not mobile', () => {
      jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => false);

      const selectStore = () => {};
      const renderer = ReactTestRenderer.create(
        <StoreItem item={item} selectStore={selectStore} />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  test('on click', () => {
    const selectStore = jest.fn();
    const renderer = ReactTestRenderer.create(<StoreItem item={item} selectStore={selectStore} />);

    (function clickOnStoreItem() {
      const storeItem = renderer.root.find(el => el.type === 'div');
      storeItem.props.onClick();
    })();

    expect(selectStore.mock.calls.length).toBe(1);
    expect(selectStore).toHaveBeenCalledWith(id);
  });
});
