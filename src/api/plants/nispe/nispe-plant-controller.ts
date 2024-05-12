import { RequestHandler } from 'express';
import {
  PlantHistoricalTelemetryRequest,
  PlantTelemetry,
  TelemetryResponse,
} from '../plants-schema';
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

export const retrieveHistoricaltNispePlantTelemetryController: RequestHandler<
  unknown,
  TelemetryResponse | { msg: string },
  PlantHistoricalTelemetryRequest
> = async (req, res, next) => {
  const { startTs, endTs } = req.body;
  try {
    const plantTelemetry = await NispePlantTelemetryModel.find({
      timestamp: { $gte: startTs, $lte: endTs },
    }).exec();
    if (plantTelemetry) {
      return res.json(plantTelemetry);
    }
  } catch (error) {
    next(error);
  }
};
