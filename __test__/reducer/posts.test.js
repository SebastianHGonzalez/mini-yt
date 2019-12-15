import { channelAdded } from 'actions/channels';
import { postAdded } from 'actions/posts';

import { allIds, byId } from 'reducer/posts';

describe('postsReducer', () => {
  let initialState;
  let addedChannel;
  let addedPost;

  beforeEach(() => {
    initialState = {
      allIds: new Set().add('id1').add('id2'),
      byId: {
        id1: { id: 'id1', title: 'post 1 title' },
        id2: { id: 'id2', title: 'post 2 title' },
      },
    };
  });

  beforeEach(() => {
    addedPost = { id: 'id4', title: 'post 4 title' };
  });

  beforeEach(() => {
    addedChannel = { id: 'id3', name: 'channel 3 name', posts: [addedPost] };
  });

  describe('allIds', () => {
    it('should add post id on channelAdded', () => {
      expect(allIds(initialState.allIds, channelAdded(addedChannel))).toEqual(
        new Set()
          .add('id1')
          .add('id2')
          .add('id4'),
      );
    });

    it('should add post id on postAdded', () => {
      expect(allIds(initialState.allIds, postAdded(addedPost))).toEqual(
        new Set()
          .add('id1')
          .add('id2')
          .add('id4'),
      );
    });
  });

  describe('byId', () => {
    it('should add post on channelAdded', () => {
      expect(byId(initialState.byId, channelAdded(addedChannel))).toEqual({
        ...initialState.byId,
        [addedPost.id]: addedPost,
      });
    });

    it('should add post on postAdded', () => {
      expect(byId(initialState.byId, postAdded(addedPost))).toEqual({
        ...initialState.byId,
        [addedPost.id]: addedPost,
      });
    });
  });
});
