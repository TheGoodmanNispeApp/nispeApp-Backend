import { RequestHandler } from 'express';
import { PlantTelemetry } from '../plants-schema';
import { NispePlantTelemetryModel } from './nispe-plants-schema.js';

export const createNispePlantTelemetryController: RequestHandler<
  unknown,
  { plantTelemetry: PlantTelemetry } | { msg: string },
  PlantTelemetry,
  unknown
> = async (req, res, next) => {
  try {
    const plantTelemetry = await NispePlantTelemetryModel.create(req.body);
    return res.status(201).json({ plantTelemetry });
  } catch (error) {
    next(error);
  }
};
