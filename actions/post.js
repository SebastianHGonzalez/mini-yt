import actionTypes from 'constants/actionTypes';

export function postAdded(post) {
  return {
    type: actionTypes.POST_ADDED,
    post,
  };
}
