import villagersReducer from '../redux/villagers/villagers';
const axios = require('axios');
const getVillagers = require('../redux/villagers/villagers');
// const initialState = [];
const axios = require('axios');

it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        name: 'Vladimir',
        id: 71,
        birthday: '2/8',
        species: 'Cub'
      },
      {
        name: 'Raymond',
        id: 64,
        birthday: '1/10',
        species: 'Cat'
      },
      {
        name: 'Spike',
        id: 339,
        birthday: '17/6',
        species: 'Rhino'
      },
      {
        name: 'Shari',
        id: 250,
        birthday: '10/4',
        species: 'Monkey'
      },
      {
        name: 'Maelle',
        id: 130,
        birthday: '8/4',
        species: 'Duck'
      },
    ]
  });

  test('Testing initial state for villager reducer', () => {
    expect(villagersReducer(undefined, {})).toEqual([]);
  });
  test('it fetches the name of a villager', () => {
    const name = await getVillagers();
    expect(name).toEqual('Vladimir');
  })
});