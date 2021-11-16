import axios from 'axios';

const GET_VILLAGERS = 'GET_VILLAGERS';
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
      /* eslint-disable no-unused-vars */
      return action.payload.data.sort((a, b) => 0.5 - Math.random());
      /* eslint-enable no-unused-vars */
    default:
      return state;
  }
};
export default reducer;
