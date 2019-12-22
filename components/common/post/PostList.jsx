import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

export const PostListItem = styled.li`
`;

function PostList({ className, children }) {
  return (
    <ul className={className}>{children}</ul>
  );
}

PostList.propTypes = {
  className: string,
  children: node,
};

PostList.defaultProps = {
  className: undefined,
  children: undefined,
};

export default styled(PostList)`
  list-style: none;
  padding: 0;
  
  display: grid;
  grid-auto-flow: column;
  width: min-content;
  grid-gap: 4px;
`;
