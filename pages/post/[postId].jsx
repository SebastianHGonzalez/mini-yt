import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

import { PublicPageLayout } from 'components/layout/page';

import { posts } from 'services';

import { postAdded } from 'actions/post';

import usePost from 'hooks/usePost';

function PostPage({ postId }) {
  const [post] = usePost(postId);

  return (
    <PublicPageLayout>
      <h1>
        {post.title}
        <small>
          <i>{`(${post.id})`}</i>
        </small>
      </h1>
    </PublicPageLayout>
  );
}

PostPage.getInitialProps = async ({ store, query: { postId } }) => {
  const post = await posts.getPostByIdWithChannel(postId);

  store.dispatch(postAdded(post));

  return {
    postId,
  };
};

PostPage.propTypes = {
  postId: string.isRequired,
};

PostPage.defaultProps = {};

export default connect()(PostPage);
