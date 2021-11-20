import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import VillagerList from '../VillagerList';

jest.mock('../VillagerList');

describe('Villager component', () => {
  test('should render Villager component correctly', () => {
    const component = render(
      <VillagerList
        key="71"
        name="Vladimir"
        id="71"
        bday="2/8"
        icon="icon"
        species="Cub"
        value="value"
      />,
    );
    expect(component.container).toHaveTextContent('Vladimir');
    expect(component.container).toHaveTextContent('Cub');
  });
  test('If name is undefined,it should throw an "Undefined Villager" error', () => {
    const component = render(
      <VillagerList
        key="key"
        name="undefined"
        id="id"
        bday="bday"
        icon="icon"
        species="species"
        value="value"
      />,
    );
    expect(component.container).toHaveTextContent('undefinedvillager');
  });
});
