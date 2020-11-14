import {combineReducer} from 'redux';

import todo from './todo';

const reducers = combineReducer({
  todo,
});

export default reducers;
