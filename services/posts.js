import { create } from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig: { services: { posts: { baseURL } } } } = getConfig();

const axios = create({
  baseURL,
});

export function getPostById(postId, params = {}) {
  return axios.get(postId, { params }).then(({ data }) => data);
}

export function getPostByIdWithChannel(postId, params = {}) {
  return getPostById(postId, { ...params, _embed: 'channel' });
}
