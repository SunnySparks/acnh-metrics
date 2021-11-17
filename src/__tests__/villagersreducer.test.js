import villagersReducer from '../redux/villagers/villagers';

const prevState = [];

const getVillagers = () => {
  const data =
      {
        "birthday": "2/8",
        "id": 71,
        "name": "Vladimir",
        "species": "Cub",
      };
    return prevState.push(data);
};

describe('Mock villager data pull', () => {
  test('It returns an empty array before fetching data', () => {
    expect(villagersReducer(undefined, {})).toEqual([]);
  });
  test('It will fetch the data of the villagers', () => {
    expect(villagersReducer(prevState, getVillagers())).toEqual(
        [{
          "birthday": "2/8",
          "id": 71,
          "name": "Vladimir",
          "species": "Cub",
        }],
    )
  })
})