import { combineReducers } from 'redux';
import actionTypes from 'constants/actionTypes';

function allIds(state = new Set(), { type, post }) {
  switch (type) {
    case actionTypes.POST_ADDED: return state.add(post.id);
    default: return state;
  }
}

function byId(state = {}, { type, post }) {
  switch (type) {
    case actionTypes.POST_ADDED: return { ...state, [post.id]: post };
    default: return state;
  }
}

export default combineReducers({
  byId,
  allIds,
});
