import { createSelector } from 'reselect';

export const i18nSelector = (state) => state.i18n;

export const messagesSelector = createSelector(
  i18nSelector,
  ({ messages }) => messages,
);

export const messagesByIdSelector = createSelector(
  messagesSelector,
  ({ byId }) => byId,
);

export const selectedLangsSelector = createSelector(
  i18nSelector,
  ({ currentLang }) => currentLang,
);

export const currentLanguageSelector = createSelector(
  selectedLangsSelector,
  ([currentLang]) => currentLang,
);

export const currentLanguageMessagesSelector = createSelector(
  messagesByIdSelector,
  currentLanguageSelector,
  (messagesById, lang) => messagesById[lang] || {},
);
