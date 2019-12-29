import { RequestHandler } from 'express';
import { ValidationError } from 'yup';

import { validate, Channel } from 'model/channel';

import createChannel from 'services/commands/createChannel';

const createChannelHandler: RequestHandler = (req, res) => {
  validate(req.body)
    .then((channel: Channel) => res.send(createChannel(channel)))
    .catch((err: ValidationError) => res.status(400).send(err));
};

export default createChannelHandler;
