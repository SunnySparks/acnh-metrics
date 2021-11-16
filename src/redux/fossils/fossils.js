import axios from 'axios';

const GET_FOSSILS = 'GET_FOSSILS';
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOSSILS:
      /* eslint-disable no-unused-vars */
      console.log(action.payload.data);
      return action.payload.data.sort((a, b) => 0.5 - Math.random());
      /* eslint-enable no-unused-vars */
    default:
      return state;
  }
};
export default reducer;
