import express from 'express';
import bodyParser from 'body-parser';

const postsRouter = express.Router();

postsRouter.use(bodyParser.json());

postsRouter.post('/', (req, res) => {
    res.send(req.body);
});

export default postsRouter;
