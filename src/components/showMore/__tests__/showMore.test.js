import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from '../index';
import detectDevice from '../../../utils/detectDevice';

describe('component/showMore', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<ShowMore />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('is Mobile', () => {
    jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => true);

    const tree = renderer.create(<ShowMore />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('is not Mobile', () => {
    jest.spyOn(detectDevice, 'isMobile').mockImplementationOnce(() => false);

    const tree = renderer.create(<ShowMore />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
