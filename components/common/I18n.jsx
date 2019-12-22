import { string, shape } from 'prop-types';

import useI18n from 'hooks/useI18n';

/**
 * @param {string} message
 * @param {{[key: string]: string}} fillers
 * @returns {string} filled message
 */
export function fillMessage(message, fillers = {}) {
  return message.split(/[(${)}]/g).map((curr) => fillers[curr] || curr).filter((i) => i);
}

function I18n({ id, fallback, fillers }) {
  const { messages } = useI18n();

  const message = messages[id] || fallback || id;

  const filledMessage = fillMessage(message, fillers);

  return filledMessage;
}

I18n.propTypes = {
  id: string.isRequired,
  fallback: string,
  fillers: shape({}),
};

I18n.defaultProps = {
  fallback: '',
  fillers: {},
};

export default I18n;
