import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const channelsSelector = ({ channels }) => channels;

export const channelsByIdSelector = createSelector(
  channelsSelector,
  ({ byId }) => byId,
);

export const channelByIdSelector = memoize((channelId) => (
  createSelector(channelsByIdSelector, (channelsById) => channelsById[channelId])
));
