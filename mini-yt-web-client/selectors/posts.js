import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const postsSelector = ({ posts }) => posts;

export const postsByIdSelector = createSelector(
  postsSelector,
  ({ byId }) => byId,
);

export const postByIdSelector = memoize((postId) => (
  createSelector(postsByIdSelector, (postsById) => postsById[postId])
));
