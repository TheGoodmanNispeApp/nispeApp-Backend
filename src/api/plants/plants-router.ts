import express from 'express';
import { nispeRouter } from './nispe/nispe-plants-router.js';

const plantsRotuer = express.Router();

plantsRotuer.use('/nispe', nispeRouter);

export default plantsRotuer;
