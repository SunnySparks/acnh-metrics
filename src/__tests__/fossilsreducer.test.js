import fossilsReducer from '../redux/fossils/fossils';

const prevState = [];

const getFossils = () => {
  const data =[
      {
        "name": "diplo skull",
        "id": 0,
        "price $": 5000,
      },
      {
        "name": "sabertooth tail",
        "id": 1,
        "price $": 2000,
      },
      {
        "name": "parasaur tail",
        "id": 2,
        "price $": 2500,
      },
      {
        "name": "ankylo tail",
        "id": 3,
        "price $": 2500,
      },
      {
        "name": "amber",
        "id": 4,
        "price $": 1200,
      }];
    return prevState.push(data);
};

describe('Mock empty data pull', () => {
  test('It returns an empty array before fetching data', () => {
    expect(fossilsReducer(undefined, {})).toEqual([]);
  });
  test('It will fetch the data of the fossil', () => {
    expect(fossilsReducer(prevState, getFossils())).toEqual(
        [[      {
          "name": "diplo skull",
          "id": 0,
          "price $": 5000,
        },
        {
          "name": "sabertooth tail",
          "id": 1,
          "price $": 2000,
        },
        {
          "name": "parasaur tail",
          "id": 2,
          "price $": 2500,
        },
        {
          "name": "ankylo tail",
          "id": 3,
          "price $": 2500,
        },
        {
          "name": "amber",
          "id": 4,
          "price $": 1200,
        }]],
    )
  })
})