import express from 'express';

import getConfig from './config';

import posts from './routes/posts';

const {
  PORT,
} = getConfig();

const app = express();

app.use('/', posts);

app.listen(PORT, () => {
  console.log('posts service listening on port %s!', PORT);
});
