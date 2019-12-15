import React from 'react';
import { string, number, oneOfType } from 'prop-types';
import styled from 'styled-components';

import I18n from 'components/common/I18n';

import useChannel from 'hooks/useChannel';

const ChannelName = styled.h1``;
const ChannelSubscriberCount = styled(({ children, className }) => (
  <h2 className={className}>
    {children}
    {' '}
    <I18n id="channel.header.subscriberCount.label" />
  </h2>
))``;

function ChannelHeader({ className, channelId }) {
  const [{ name, subscriberCount }] = useChannel(channelId);
  return (
    <section className={className}>
      <ChannelName>{name}</ChannelName>
      <ChannelSubscriberCount>{subscriberCount}</ChannelSubscriberCount>
    </section>
  );
}

ChannelHeader.propTypes = {
  className: string,
  channelId: oneOfType([string, number]).isRequired,
};

ChannelHeader.defaultProps = {
  className: undefined,
};

export default styled(ChannelHeader)``;
