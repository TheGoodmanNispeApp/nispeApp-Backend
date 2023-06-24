import express from 'express';
import { createNispePlantTelemetryController } from './nispe-plant-controller.js';

export const nispeRouter = express.Router();

nispeRouter.route('/').post(createNispePlantTelemetryController);
