import React from 'react';
import { string, number, oneOfType } from 'prop-types';
import styled from 'styled-components';

import Collection from 'components/common/collection';

import useChannelCollections from 'hooks/useChannelCollections';

function ChannelCollections({ className, channelId }) {
  const [collections] = useChannelCollections(channelId);
  return (
    <section className={className}>
      {collections.map(({
        id, type, name, posts,
      }) => (
        <Collection key={id} id={id} type={type} name={name} postIds={posts} />
      ))}
    </section>
  );
}

ChannelCollections.propTypes = {
  className: string,
  channelId: oneOfType([string, number]).isRequired,
};

ChannelCollections.defaultProps = {
  className: undefined,
};

export default styled(ChannelCollections)``;
