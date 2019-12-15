import React from 'react';
import { string, arrayOf } from 'prop-types';
import styled from 'styled-components';

import { PostList, PostListItem, Post } from 'components/common/post';

const CollectionName = styled.h3``;

function Collection({
  className, id, type, name, postIds,
}) {
  return (
    <article id={id} className={className}>
      <CollectionName>{name}</CollectionName>
      <PostList type={type}>
        {postIds.map((postId) => (
          <PostListItem key={postId}>
            <Post postId={postId} />
          </PostListItem>
        ))}
      </PostList>
    </article>
  );
}

Collection.propTypes = {
  className: string,
  id: string.isRequired,
  type: string.isRequired,
  name: string.isRequired,
  postIds: arrayOf(string).isRequired,
};

Collection.defaultProps = {
  className: undefined,
};

export default styled(Collection)``;
