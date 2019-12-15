import { channelAdded } from 'actions/channel';

import { allIds, byId } from 'reducer/collections';

describe('postsReducer', () => {
  let initialState;
  let addedChannel;
  let addedCollection;
  let addedPost;

  beforeEach(() => {
    initialState = {
      allIds: new Set().add('id1').add('id2'),
      byId: {
        id1: { id: 'id1', type: 'FEATURED', posts: [1, 2] },
        id2: { id: 'id2', type: 'RECENT', posts: [2, 3] },
      },
    };
  });

  beforeEach(() => {
    addedPost = { id: 'id4', title: 'post 4 title' };
  });

  beforeEach(() => {
    addedCollection = { id: 'id5', type: 'LIKED', posts: [3] };
  });

  beforeEach(() => {
    addedChannel = { id: 'id3', name: 'channel 3 name', posts: [addedPost], collections: [addedCollection] };
  });

  describe('allIds', () => {
    it('should add post id on channelAdded', () => {
      expect(allIds(initialState.allIds, channelAdded(addedChannel))).toEqual(
        new Set()
          .add('id1')
          .add('id2')
          .add('id5'),
      );
    });
  });

  describe('byId', () => {
    it('should add post on channelAdded', () => {
      expect(byId(initialState.byId, channelAdded(addedChannel))).toEqual({
        ...initialState.byId,
        [addedCollection.id]: addedCollection,
      });
    });
  });
});
