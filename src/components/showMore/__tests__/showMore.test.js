import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ShowMore from '../index';
import detectDevice from '../../../utils/detectDevice';

describe('component/showMore', () => {
  test('renders correctly', () => {
    const renderer = ReactTestRenderer.create(<ShowMore />).toJSON();
    expect(renderer).toMatchSnapshot();
  });

  test('is Mobile', () => {
    jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => true);

    const renderer = ReactTestRenderer.create(<ShowMore />).toJSON();
    expect(renderer).toMatchSnapshot();
  });

  test('is not Mobile', () => {
    jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => false);

    const renderer = ReactTestRenderer.create(<ShowMore />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
