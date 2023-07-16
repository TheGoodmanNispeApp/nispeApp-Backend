import express from 'express';
import {
  createNispePlantTelemetryController,
  retrieveLatestNispePlantTelemetryController,
  retrieveNispePlantTelemetryController,
} from './nispe-plant-controller.js';

export const nispeRouter = express.Router();

nispeRouter
  .route('/')
  .get(retrieveNispePlantTelemetryController)
  .post(createNispePlantTelemetryController);

nispeRouter.route('/latest').get(retrieveLatestNispePlantTelemetryController);
