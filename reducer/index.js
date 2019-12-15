import { combineReducers } from 'redux';

import channels from './channels';
import collections from './collections';
import posts from './posts';

export default combineReducers({
  channels,
  collections,
  posts,
});
