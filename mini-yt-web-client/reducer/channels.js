import { combineReducers } from 'redux';
import { normalize } from 'normalizr';

import actionTypes from 'constants/actionTypes';
import { channelSchema, postSchema } from 'constants/schemas';

export function allIds(state = new Set(), { type, post, channel }) {
  switch (type) {
    case actionTypes.CHANNEL_ADDED:
      return Object.keys(
        normalize(channel, channelSchema).entities.channels,
      ).reduce((acc, curr) => acc.add(curr), state);
    case actionTypes.POST_ADDED:
      return Object.keys(
        normalize(post, postSchema).entities.channels,
      ).reduce((acc, curr) => acc.add(curr), state);
    default:
      return state;
  }
}

export function byId(state = {}, { type, post, channel }) {
  switch (type) {
    case actionTypes.CHANNEL_ADDED:
      return {
        ...state,
        ...normalize(channel, channelSchema).entities.channels,
      };
    case actionTypes.POST_ADDED:
      return {
        ...state,
        ...normalize(post, postSchema).entities.channels,
      };
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  allIds,
});
