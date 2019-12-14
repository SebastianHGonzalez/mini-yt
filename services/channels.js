import { create } from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig: { services: { channels: { baseURL } } } } = getConfig();

const axios = create({
  baseURL,
});

export function getChannelById(channelId) {
  return axios.get(channelId).then(({ data }) => data);
}
