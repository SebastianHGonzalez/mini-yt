import React from 'react';
import { string, shape } from 'prop-types';

import Picture from 'components/common/Picture';

export default function PostThumbnail({ thumbnail: { src } }) {
  return <Picture src={src} />;
}

PostThumbnail.propTypes = {
  thumbnail: shape({
    src: string.isRequired,
  }).isRequired,
};

PostThumbnail.defaultProps = {};
