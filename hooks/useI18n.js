import { useSelector } from 'react-redux';

import { currentLanguageMessagesSelector, currentLanguageSelector } from 'selectors/i18n';

export default function useI18n() {
  return {
    currentLang: useSelector(currentLanguageSelector),
    messages: useSelector(currentLanguageMessagesSelector),
  };
}
