import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Home from '../components/Home';

describe('Home component', () => {
  test('should render Home component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Home />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});