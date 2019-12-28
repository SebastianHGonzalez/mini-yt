import { channelAdded } from 'actions/channels';
import { postAdded } from 'actions/posts';

import { allIds, byId } from 'reducer/channels';

describe('channelsReducer', () => {
  let initialState;
  let addedChannel;
  let addedPost;

  beforeEach(() => {
    initialState = {
      allIds: new Set().add('id1').add('id2'),
      byId: {
        id1: { id: 'id1', name: 'channel 1 name' },
        id2: { id: 'id2', name: 'channel 2 name' },
      },
    };
  });

  beforeEach(() => {
    addedChannel = { id: 'id3', name: 'channel 3 name' };
  });

  beforeEach(() => {
    addedPost = { id: 'id4', title: 'post 4 title', channel: addedChannel };
  });

  describe('allIds', () => {
    it('should add channel id on channelAdded', () => {
      expect(allIds(initialState.allIds, channelAdded(addedChannel))).toEqual(
        new Set()
          .add('id1')
          .add('id2')
          .add('id3'),
      );
    });

    it('should add channel id on postAdded', () => {
      expect(allIds(initialState.allIds, postAdded(addedPost))).toEqual(
        new Set()
          .add('id1')
          .add('id2')
          .add('id3'),
      );
    });
  });

  describe('byId', () => {
    it('should add channel on channelAdded', () => {
      expect(byId(initialState.byId, channelAdded(addedChannel))).toEqual({
        ...initialState.byId,
        [addedChannel.id]: addedChannel,
      });
    });

    it('should add channel on postAdded', () => {
      expect(byId(initialState.byId, postAdded(addedPost))).toEqual({
        ...initialState.byId,
        [addedChannel.id]: addedChannel,
      });
    });
  });
});
