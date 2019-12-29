import express from 'express';
import bodyParser from 'body-parser';

import createChannelHandler from 'handlers/commands/createChannelHandler';

const channelsRouter = express.Router();

channelsRouter.post('/', bodyParser.json(), createChannelHandler);

export default channelsRouter;
