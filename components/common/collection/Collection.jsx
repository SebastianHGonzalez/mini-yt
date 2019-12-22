import React from 'react';
import {
  string, arrayOf, oneOfType, number,
} from 'prop-types';
import styled from 'styled-components';

import I18n from 'components/common/I18n';
import { PostList, Post } from 'components/common/post';

const CollectionName = styled.h3``;

function Collection({
  className, id, type, name, postIds,
}) {
  return (
    <article id={id} className={className}>
      <CollectionName><I18n id={name} /></CollectionName>
      <PostList type={type}>
        {postIds.map((postId) => (
          <Post postId={postId} />
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
  postIds: arrayOf(oneOfType([number, string])).isRequired,
};

Collection.defaultProps = {
  className: undefined,
};

export default styled(Collection)``;
