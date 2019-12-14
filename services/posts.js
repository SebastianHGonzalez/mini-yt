import { create } from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig: { services: { posts: { baseURL } } } } = getConfig();

const axios = create({
  baseURL,
});

export function getPostById(postId) {
  return axios.get(postId).then(({ data }) => data);
}
