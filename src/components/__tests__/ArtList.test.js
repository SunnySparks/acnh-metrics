import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ArtList from '../ArtList';

jest.mock('../ArtList');

describe('Art component', () => {
  test('should render Art component correctly', () => {
    const component = render(
      <ArtList
        name="beautiful statue"
        id="5"
        image="image"
        buyPrice="4980"
        sellPrice="1245"
      />,
    );
    expect(component.container).toHaveTextContent('beautiful statue');
    expect(component.container).toHaveTextContent('4980');
  });
  test('If name is undefined,it should throw a "loading" message', () => {
    const component = render(
      <ArtList
        name="undefined"
        id="id"
        image="image"
        buyPrice="buyPrice"
        sellPrice="sellPrice"
      />,
    );
    expect(component.container).toHaveTextContent('Loading');
  });
});
