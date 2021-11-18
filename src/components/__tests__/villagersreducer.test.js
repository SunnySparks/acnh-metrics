import villagersReducer from '../../redux/villagers/villagers';

const prevState = [];

const getVillagers = () => {
  const data = [
    {
      birthday: '2/8',
      id: 71,
      name: 'Vladimir',
      species: 'Cub',
    },
    {
      birthday: '24/4',
      id: 234,
      name: 'Walt',
      species: 'Kangaroo',
    },
    {
      birthday: '21/11',
      id: 249,
      name: 'Flip',
      species: 'Monkey',
    },
    {
      birthday: '9/11',
      id: 3,
      name: 'Pango',
      species: 'Monkey',
    },
    {
      birthday: '20/2',
      id: 301,
      name: 'Sprinke',
      species: 'Penguin',
    }];
  return prevState.push(data);
};

const initialState = [];
const getOneVillager = (id) => {
  const data = {
    birthday: '20/2',
    id: 301,
    name: 'Sprinke',
    species: 'Penguin',
  };
  return initialState.push(data);
};

describe('Mock villager data pull', () => {
  test('It returns an empty array before fetching data', () => {
    expect(villagersReducer(undefined, {})).toEqual([]);
  });
  test('It will fetch the data of the villagers', () => {
    expect(villagersReducer(prevState, getVillagers())).toEqual(
      [[{
        birthday: '2/8',
        id: 71,
        name: 'Vladimir',
        species: 'Cub',
      },
      {
        birthday: '24/4',
        id: 234,
        name: 'Walt',
        species: 'Kangaroo',
      },
      {
        birthday: '21/11',
        id: 249,
        name: 'Flip',
        species: 'Monkey',
      },
      {
        birthday: '9/11',
        id: 3,
        name: 'Pango',
        species: 'Monkey',
      },
      {
        birthday: '20/2',
        id: 301,
        name: 'Sprinke',
        species: 'Penguin',
      }]],
    );
  });
  test('It will fetch the data of one villager', () => {
    expect(villagersReducer(initialState, getOneVillager(301))).toEqual(
      [{
        birthday: '20/2',
        id: 301,
        name: 'Sprinke',
        species: 'Penguin',
      }],
    );
  });
});
