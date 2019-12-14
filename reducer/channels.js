import { combineReducers } from 'redux';
import actionTypes from '../constants/actionTypes';

function allIds(state = new Set(), { type, channel }) {
  switch (type) {
    case actionTypes.CHANNEL_ADDED: return state.add(channel.id);
    default: return state;
  }
}

function byId(state = {}, { type, channel }) {
  switch (type) {
    case actionTypes.CHANNEL_ADDED: return { ...state, [channel.id]: channel };
    default: return state;
  }
}

export default combineReducers({
  byId,
  allIds,
});
