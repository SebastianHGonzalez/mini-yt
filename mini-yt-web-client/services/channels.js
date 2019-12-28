import { create } from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig: { services: { channels: { baseURL } } } } = getConfig();

const axios = create({
  baseURL,
});

/**
 * @param {String} channelId
 * @param {Object} params
 */
export function getChannelById(channelId, params = {}) {
  return axios.get(channelId, { params }).then(({ data }) => data);
}

/**
 * @param {String} channelId
 * @param {Object} params
 */
export function getChannelByIdWithPosts(channelId, params = {}) {
  return getChannelById(channelId, { ...params, _embed: ['posts', 'collections'] });
}
