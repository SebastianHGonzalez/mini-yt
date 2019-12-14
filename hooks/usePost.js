import { useSelector } from 'react-redux';

export default function usePost(channelId) {
  return [useSelector((state) => state.posts.byId[channelId])];
}
