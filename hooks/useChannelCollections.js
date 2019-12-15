import { useSelector } from 'react-redux';

import { collectionsByChannelIdSelector } from 'selectors/collections';

export default function useChannelCollections(channelId) {
  return [useSelector(collectionsByChannelIdSelector(channelId))];
}
