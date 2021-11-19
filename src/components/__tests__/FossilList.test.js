import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FossilList from '../FossilList';

jest.mock('../FossilList');

describe('Fossil component', () => {
  test('should render Fossils component correctly', () => {
    const component = render(
      <FossilList
        name="diplo skull"
        id="diplo skull"
        price="5000"
        image="image"
        idNum="id"
      />,
    );
    expect(component.container).toHaveTextContent('diplo skull');
    expect(component.container).toHaveTextContent('5000');
  });
  test('If name is undefined,it should throw a "loading" message', () => {
    const component = render(
      <FossilList
        name="undefined"
        id="id"
        price="price"
        image="image"
        idNum="id"
      />,
    );
    expect(component.container).toHaveTextContent('Loading');
  });
});
