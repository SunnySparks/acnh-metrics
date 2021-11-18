import axios from 'axios';

const GET_VILLAGERS = 'GET_VILLAGERS';
const GET_A_VILLAGER = 'GET_A_VILLAGER';
const GET_ARRAY_INFO = 'GET_ARRAY_INFO';
const API_URL = 'https://acnhapi.com/v1a/villagers/';

const initialState = [];
export const getVillagers = () => async (dispatch) => {
  await axios.get(API_URL, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_VILLAGERS,
        payload: response,
      });
    });
};

export const getArrayData = () => async (dispatch) => {
  await axios.get(API_URL, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_ARRAY_INFO,
        payload: response,
      });
    });
};

export const getOneVillager = (villagerID) => async (dispatch) => {
  await axios.get(`https://acnhapi.com/v1a/villagers/${villagerID}`, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_A_VILLAGER,
        payload: response,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VILLAGERS:
      /* eslint-disable no-unused-vars */
      return action.payload.data.sort((a, b) => 0.5 - Math.random());
      /* eslint-enable no-unused-vars */
    case GET_A_VILLAGER:
      /* eslint-disable dot-notation */
      return action.payload.data;
    case GET_ARRAY_INFO:
      return action.payload.data.length;
    default:
      return state;
  }
};
export default reducer;
