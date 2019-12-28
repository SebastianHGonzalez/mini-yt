import { schema } from 'normalizr';

export const postSchema = new schema.Entity('posts');
export const postsSchema = new schema.Array(postSchema);

export const collectionSchema = new schema.Entity('collections', { posts: postsSchema });
export const collectionsSchema = new schema.Array(collectionSchema);

export const channelSchema = new schema.Entity('channels', { posts: postsSchema, collections: collectionsSchema });
export const channelsSchema = new schema.Array(channelSchema);

postSchema.define({ channel: channelSchema });
