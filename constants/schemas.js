import { schema } from 'normalizr';

export const postSchema = new schema.Entity('posts');
export const postsSchema = new schema.Array(postSchema);

export const channelSchema = new schema.Entity('channels', { posts: postsSchema });
export const channelsSchema = new schema.Array(channelSchema);

postSchema.define({ channel: channelSchema });
