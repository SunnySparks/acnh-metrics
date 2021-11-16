import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import villagersReducer from './villagers/villagers';
import fossilsReducer from './fossils/fossils';

const reducer = combineReducers({
  villagersReducer, fossilsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
