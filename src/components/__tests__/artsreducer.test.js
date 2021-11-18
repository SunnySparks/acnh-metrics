import artsReducer from '../../redux/art/art';

const prevState = [];

const getArts = () => {
  const data = [
    {
      name: 'mystic statue',
      id: 23,
      'Buy price': 4980,
      'Sell price': 1245,
    },
    {
      name: 'ancient statue',
      id: 3,
      'Buy price': 4980,
      'Sell price': 1245,
    },
    {
      name: 'scary painting',
      id: 30,
      'Buy price': 4980,
      'Sell price': 1245,
    },
    {
      name: 'beautiful statue',
      id: 5,
      'Buy price': 4980,
      'Sell price': 1245,
    },
    {
      name: 'mysterious painting',
      id: 22,
      'Buy price': 4980,
      'Sell price': 1245,
    }];
  return prevState.push(data);
};

const initialState = [];
const getArt = (id) => {
  const data = {
    name: 'beautiful statue',
    id: 5,
    'Buy price': 4980,
    'Sell price': 1245,
  };
  return initialState.push(data);
};

describe('Mock empty data pull', () => {
  test('It returns an empty array before fetching data', () => {
    expect(artsReducer(undefined, {})).toEqual([]);
  });
  test('It will fetch the data of the art pieces', () => {
    expect(artsReducer(prevState, getArts())).toEqual(
      [[{
        name: 'mystic statue',
        id: 23,
        'Buy price': 4980,
        'Sell price': 1245,
      },
      {
        name: 'ancient statue',
        id: 3,
        'Buy price': 4980,
        'Sell price': 1245,
      },
      {
        name: 'scary painting',
        id: 30,
        'Buy price': 4980,
        'Sell price': 1245,
      },
      {
        name: 'beautiful statue',
        id: 5,
        'Buy price': 4980,
        'Sell price': 1245,
      },
      {
        name: 'mysterious painting',
        id: 22,
        'Buy price': 4980,
        'Sell price': 1245,
      }]],
    );
  });
  test('It will fetch the data of one fossil', () => {
    expect(artsReducer(initialState, getArt(5))).toEqual(
      [{
        name: 'beautiful statue',
        id: 5,
        'Buy price': 4980,
        'Sell price': 1245,
      }],
    );
  });
});
