import { useSelector } from 'react-redux';

import { postByIdSelector } from 'selectors/posts';

export default function usePost(channelId) {
  return [useSelector(postByIdSelector(channelId))];
}
