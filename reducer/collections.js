import { combineReducers } from 'redux';
import { normalize } from 'normalizr';

import actionTypes from 'constants/actionTypes';
import { channelSchema } from 'constants/schemas';

export function allIds(state = new Set(), { type, channel }) {
  switch (type) {
    case actionTypes.CHANNEL_ADDED:
      return Object.keys(
        normalize(channel, channelSchema).entities.collections,
      ).reduce((acc, curr) => acc.add(curr), state);
    default:
      return state;
  }
}

export function byId(state = {}, { type, channel }) {
  switch (type) {
    case actionTypes.CHANNEL_ADDED:
      return {
        ...state,
        ...normalize(channel, channelSchema).entities.collections,
      };
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  allIds,
});
