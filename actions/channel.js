import actionTypes from 'constants/actionTypes';

export function channelAdded(channel) {
  return {
    type: actionTypes.CHANNEL_ADDED,
    channel,
  };
}
