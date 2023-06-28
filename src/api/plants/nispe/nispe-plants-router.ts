import express from 'express';
import {
  createNispePlantTelemetryController,
  retrieveNispePlantTelemetryController,
} from './nispe-plant-controller.js';

export const nispeRouter = express.Router();

nispeRouter
  .route('/')
  .get(retrieveNispePlantTelemetryController)
  .post(createNispePlantTelemetryController);
