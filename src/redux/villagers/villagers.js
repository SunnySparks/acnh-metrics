import axios from 'axios';

const GET_VILLAGERS = 'GET_VILLAGERS';
const FILTER_VILLAGERS = 'FILTER_VILLAGERS';
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VILLAGERS:
      return action.payload.data.map((state) => (state));
    default:
      return state;
  }
};
export default reducer;
