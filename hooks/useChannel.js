import { useSelector } from 'react-redux';

import { channelByIdSelector } from 'selectors/channels';

export default function useChannel(channelId) {
  return [useSelector(channelByIdSelector(channelId))];
}
