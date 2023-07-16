import { RequestHandler } from 'express';
import { PlantTelemetry, TelemetryResponse } from '../plants-schema';
import { NispePlantTelemetryModel } from './nispe-plants-schema.js';

export const createNispePlantTelemetryController: RequestHandler<
  unknown,
  PlantTelemetry | { msg: string },
  PlantTelemetry,
  unknown
> = async (req, res, next) => {
  try {
    const plantTelemetry = await NispePlantTelemetryModel.create(req.body);
    return res.status(201).json(plantTelemetry);
  } catch (error) {
    next(error);
  }
};

export const retrieveNispePlantTelemetryController: RequestHandler<
  unknown,
  TelemetryResponse | { msg: string }
> = async (_req, res, next) => {
  try {
    const plantTelemetry = await NispePlantTelemetryModel.find({}).exec();
    return res.json(plantTelemetry);
  } catch (error) {
    next(error);
  }
};

export const retrieveLatestNispePlantTelemetryController: RequestHandler<
  unknown,
  PlantTelemetry | { msg: string }
> = async (_req, res, next) => {
  try {
    const plantTelemetry = await NispePlantTelemetryModel.findOne()
      .sort({
        timestamp: -1,
      })
      .exec();
    if (plantTelemetry) {
      return res.json(plantTelemetry);
    }
  } catch (error) {
    next(error);
  }
};
