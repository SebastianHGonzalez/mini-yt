import actionTypes from 'constants/actionTypes';

export function languagesAdded(languages) {
  return {
    type: actionTypes.LANGUAGES_ADDED,
    languages,
  };
}

export function messagesAdded(language, messages) {
  return {
    type: actionTypes.MESSAGES_ADDED,
    language,
    messages,
  };
}
