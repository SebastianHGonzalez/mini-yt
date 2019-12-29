import { Channel } from 'model/channel';


export default function createChannel(channel: Channel): Channel {
  console.log('channel created', channel);
  return channel;
}
