import { useSelector } from 'react-redux';

import { postByIdSelector } from 'selectors/posts';

export default function usePost(postId) {
  return [useSelector(postByIdSelector(postId))];
}
