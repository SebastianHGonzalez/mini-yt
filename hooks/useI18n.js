import { useSelector } from 'react-redux';

import { currentLanguageMessagesSelector } from 'selectors/i18n';

export default function useI18n() {
  return {
    messages: useSelector(currentLanguageMessagesSelector),
  };
}
