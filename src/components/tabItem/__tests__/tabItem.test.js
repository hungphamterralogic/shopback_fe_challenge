import React from 'react';

import ReactTestRenderer from 'react-test-renderer';

import detectDevice from 'utils/detectDevice';

import TabItem from '../tabItem';

describe('TabItem', () => {
  const props = {
    selectedCategoryId: 'selectedCategoryId',
    id: 'idTest',
    name: 'nameTest',
    iconUrl: 'iconUrlTest',
    selectCategory: () => {}
  };

  describe('display properly', () => {
    describe('is selected', () => {
      beforeAll(() => {
        props.selectedCategoryId = props.id;
      });

      test('is mobile', () => {
        jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => true);

        const renderer = ReactTestRenderer.create(<TabItem {...props} />);
        expect(renderer.toJSON()).toMatchSnapshot();
      });

      test('is not mobile', () => {
        jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => false);

        const renderer = ReactTestRenderer.create(<TabItem {...props} />);
        expect(renderer.toJSON()).toMatchSnapshot();
      });
    });

    describe('is not selected', () => {
      beforeAll(() => {
        props.selectedCategoryId = `differentThan${props.id}`;
      });

      test('is mobile', () => {
        jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => true);

        const renderer = ReactTestRenderer.create(<TabItem {...props} />);
        expect(renderer.toJSON()).toMatchSnapshot();
      });

      test('is not mobile', () => {
        jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => false);

        const renderer = ReactTestRenderer.create(<TabItem {...props} />);
        expect(renderer.toJSON()).toMatchSnapshot();
      });
    });
  });

  test('on click', () => {
    props.selectCategory = jest.fn();

    const renderer = ReactTestRenderer.create(<TabItem {...props} />);

    (function clickOnTabItem() {
      const tabItem = renderer.root.find(el => el.type === 'div');
      tabItem.props.onClick();
    })();

    expect(props.selectCategory.mock.calls.length).toBe(1);
    expect(props.selectCategory).toHaveBeenCalledWith(props.id);
  });
});
