import { combineReducers } from 'redux';

import users from './users';
import filter from './filter';
import search from './search';

export default combineReducers({
  users
  , filter
  , search
});
