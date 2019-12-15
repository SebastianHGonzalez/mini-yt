import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

import { channelsByIdSelector } from './channels';

export const collectionsSelector = (state) => state.collections;

export const collectionsByIdSelector = createSelector(
  collectionsSelector,
  ({ byId }) => byId,
);

export const collectionsByChannelIdSelector = memoize((channelId) => createSelector(
  channelsByIdSelector,
  collectionsByIdSelector,
  (channelsById, collectionsById) => channelsById[channelId].collections.map(
    (collection) => collectionsById[collection],
  ),
));
