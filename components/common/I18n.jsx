import { string, shape } from 'prop-types';

import useI18n from 'hooks/useI18n';


const fillTagRegex = /\${(.*?)}/g; // it matches all tags in a string ex. '${foo}'
const fillTagCleanupRegex = /[a-zA-Z0-9]+/g; // it cleans up tag sintax ex. '${foo}' => 'foo'

/**
 * Replaces string tags with values in provided as fillers
 * ex. "a ${foo} is a ${baz}", { foo: "dog", baz: "canine"} => "a dog is a canine"
 *
 * @param {string} message
 * @param {{[key: string]: string}} fillers
 * @returns {string} filled message
 */
function fillMessage(message, fillers = {}) {
  return (message.match(fillTagRegex) || [])
    .map((fillTag) => ({
      fillTag,
      fillerKey: fillTag.match(fillTagCleanupRegex)[0],
    }))
    .reduce(
      (partiallyFilledMessage, { fillTag, fillerKey }) => (
        partiallyFilledMessage.replace(fillTag, fillers[fillerKey] || fillTag)
      ),
      message,
    );
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
