import React from 'react';
import { string, oneOfType, number } from 'prop-types';
import styled from 'styled-components';

import I18n from 'components/common/I18n';
import FormatedDate from 'components/common/FormatedDate';
import FormatedNumber from 'components/common/FormatedNumber';
import PostThumbnail from 'components/common/post/PostThumbnail';

import usePost from 'hooks/usePost';

const PostTitle = styled.h4``;
const PostMetadata = styled.div`
  
`;

const ViewCount = styled.span`
  &:after {
    content: "•";
    margin: 0 4px;
  }
`;

const UploadDate = styled.span``;

function Post({ className, postId }) {
  const [{
    id, title, thumbnail, viewCount, uploadDate,
  }] = usePost(postId);

  return (
    <div key={id} id={id} className={className}>
      <PostThumbnail thumbnail={thumbnail} />
      <PostTitle>{title}</PostTitle>
      <PostMetadata>
        <ViewCount>
          <I18n id="post.viewCount.label" fillers={{ viewCount: <FormatedNumber value={viewCount} /> }} />
        </ViewCount>
        <wbr />
        <UploadDate>
          <FormatedDate date={uploadDate} />
        </UploadDate>
      </PostMetadata>
    </div>
  );
}

Post.propTypes = {
  className: string,
  postId: oneOfType([string, number]).isRequired,
};

Post.defaultProps = {
  className: undefined,
};

export default styled(Post)`
  width: 13em;
`;
