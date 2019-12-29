import express from 'express';
import bodyParser from 'body-parser';

const channelsRouter = express.Router();

channelsRouter.use(bodyParser.json());

channelsRouter.post('/', (req, res) => {
    res.send(req.body);
});

export default channelsRouter;
