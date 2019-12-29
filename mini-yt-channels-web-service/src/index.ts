import express from 'express';

import getConfig from 'config';

import channels from 'routes/channels';

const {
  PORT,
} = getConfig();

const app = express();

app.use('/', channels);

app.listen(PORT, () => {
  console.log('Channels service listening on port %s!', PORT);
});
