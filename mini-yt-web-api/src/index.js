import express from 'express';

import getConfig from './config';

const {
  PORT,
} = getConfig();

const app = express();

app.listen(PORT, () => {
  console.log('Example app listening on port %s!', PORT);
});
