import axios from 'axios';

const GET_ARTS = 'GET_ARTS';
const GET_ART = 'GET_ART';
const API_URL = 'https://acnhapi.com/v1a/art/';

const initialState = [];
export const getArts = () => async (dispatch) => {
  await axios.get(API_URL, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_ARTS,
        payload: response,
      });
    });
};

export const getArt = (artID) => async (dispatch) => {
  await axios.get(`https://acnhapi.com/v1a/art/${artID}`, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_ART,
        payload: response,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTS:
      /* eslint-disable no-unused-vars */
      console.log(action.payload.data);
      return action.payload.data.sort((a, b) => 0.5 - Math.random());
      /* eslint-enable no-unused-vars */
    case GET_ART:
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
};

export default reducer;
