import { combineReducers } from 'redux';

import actionTypes from 'constants/actionTypes';

export function byId(state = {}, { type, language, messages }) {
  switch (type) {
    case actionTypes.MESSAGES_ADDED:
      return {
        ...state,
        [language]: messages,
      };
    default:
      return state;
  }
}

export function allIds(state = new Set(), { type, languages, language }) {
  switch (type) {
    case actionTypes.LANGUAGES_ADDED:
      return languages.reduce((acc, curr) => acc.add(curr), state);
    case actionTypes.MESSAGES_ADDED:
      return state.add(language);
    default:
      return state;
  }
}

export function currentLang(state = ['es-AR'], { type, language }) {
  switch (type) {
    case actionTypes.LANGUAGE_SET:
      if (language !== state[0]) return [language, ...state];
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  currentLang,
  messages: combineReducers({
    allIds,
    byId,
  }),
});
