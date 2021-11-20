import axios from 'axios';

const GET_FOSSILS = 'GET_FOSSILS';
const GET_A_FOSSIL = 'GET_A_FOSSIL';
const GET_FOSSIL_LENGTH = 'GET_FOSSIL_LENGTH';
const API_URL = 'https://acnhapi.com/v1a/fossils/';

const initialState = [];
export const getFossils = () => async (dispatch) => {
  await axios.get(API_URL, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_FOSSILS,
        payload: response,
      });
    });
};

export const getFossilLength = () => async (dispatch) => {
  await axios.get(API_URL, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_FOSSIL_LENGTH,
        payload: response,
      });
    });
};

export const getOneFossil = (fossilName) => async (dispatch) => {
  await axios.get(`https://acnhapi.com/v1a/fossils/${fossilName}`, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_A_FOSSIL,
        payload: response,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOSSILS:
      return action.payload.data.sort(() => 0.5 - Math.random());
    case GET_A_FOSSIL:
      return action.payload.data;
    case GET_FOSSIL_LENGTH:
      return action.payload.data.length;
    default:
      return state;
  }
};
export default reducer;
