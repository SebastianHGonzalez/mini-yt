import { useSelector } from 'react-redux';

export default function useChannel(channelId) {
  return [useSelector((state) => state.channels.byId[channelId])];
}
