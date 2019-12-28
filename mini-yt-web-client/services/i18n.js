import { create } from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig: { services: { i18n: { baseURL } } } } = getConfig();

const axios = create({
  baseURL,
});

export function getLanguages() {
  return axios.get('languages.json').then(({ data }) => data);
}

export function getMessages(lang) {
  return axios.get(`messages/${lang}.json`).then(({ data }) => data);
}
