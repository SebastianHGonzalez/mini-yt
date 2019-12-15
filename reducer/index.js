import { combineReducers } from 'redux';

import channels from './channels';
import collections from './collections';
import i18n from './i18n';
import posts from './posts';

export default combineReducers({
  channels,
  collections,
  posts,
  i18n,
});
