import axios from 'axios';

const GET_FOSSILS = 'GET_FOSSILS';
const GET_A_FOSSIL = 'GET_A_FOSSIL';
const GET_ARRAY_INFO = 'GET_ARRAY_INFO';
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
        type: GET_ARRAY_INFO,
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
      /* eslint-disable no-unused-vars */
      return action.payload.data.sort((a, b) => 0.5 - Math.random());
      /* eslint-enable no-unused-vars */
    case GET_A_FOSSIL:
      console.log(action.payload.data);
      return action.payload.data;
    case GET_ARRAY_INFO:
      return action.payload.data.length;
    default:
      return state;
  }
};
export default reducer;
