import express from 'express';
import plantsRouter from './plants/plants-router.js';

const apiRouter = express.Router();

apiRouter.use('/plants', plantsRouter);

export default apiRouter;
