import fossilsReducer from '../redux/fossils/fossils';

const prevState = [];

const getFossils = () => {
  const data =
      {
        "id": 0,
        "price $": 5000,
      };
    return prevState.push(data);
};

describe('Mock empty data pull', () => {
  test('It returns an empty array before fetching data', () => {
    expect(fossilsReducer(undefined, {})).toEqual([]);
  });
  test('It will fetch the data of the fossil', () => {
    expect(fossilsReducer(prevState, getFossils())).toEqual(
        [{
          "id": 0,
          "price $": 5000,
        }],
    )
  })
})