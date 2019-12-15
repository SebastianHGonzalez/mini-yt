import React from 'react';
import { string, oneOfType, number } from 'prop-types';
import styled from 'styled-components';

import usePost from 'hooks/usePost';

const PostTitle = styled.h4``;

function Post({ className, postId }) {
  const [{ id, title }] = usePost(postId);

  return (
    <div className={className}>
      <PostTitle>
        {title}
        {' '}
        <small><i>{`(${id})`}</i></small>
      </PostTitle>
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

export default styled(Post)``;
