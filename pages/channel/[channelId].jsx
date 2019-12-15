import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

import { PublicPageLayout } from 'components/layout/page';

import { channels } from 'services';

import { channelAdded } from 'actions/channels';

import { ChannelHeader, ChannelCollections } from 'components/channel';

function ChannelPage({ channelId }) {
  return (
    <PublicPageLayout>
      <ChannelHeader channelId={channelId} />
      <ChannelCollections channelId={channelId} />
    </PublicPageLayout>
  );
}

ChannelPage.getInitialProps = async ({ store, query: { channelId } }) => {
  const channel = await channels.getChannelByIdWithPosts(channelId);

  store.dispatch(channelAdded(channel));

  return {
    channelId,
  };
};

ChannelPage.propTypes = {
  channelId: string.isRequired,
};

ChannelPage.defaultProps = {};

export default connect()(ChannelPage);
