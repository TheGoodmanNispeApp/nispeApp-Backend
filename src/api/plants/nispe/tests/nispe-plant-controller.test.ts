import { Request, Response } from 'express';
import {
  plantTelemetryMock,
  telemetryListMock,
} from '../../../../../__mocks__/plant-telemetry.mock.js';
import { PlantTelemetry, TelemetryResponse } from '../../plants-schema.js';
import {
  createNispePlantTelemetryController,
  retrieveLatestNispePlantTelemetryController,
  retrieveNispePlantTelemetryController,
} from '../nispe-plant-controller.js';
import { NispePlantTelemetryModel } from '../nispe-plants-schema.js';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Given a Nispe entity controllers', () => {
  const next = jest.fn();

  describe('when a request to create a telemetry insertion to a plant is made', () => {
    const request = {
      body: plantTelemetryMock,
    } as Partial<Request>;

    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Partial<Response>;

    NispePlantTelemetryModel.create = jest
      .fn()
      .mockResolvedValue(plantTelemetryMock);

    test('and it is successfull then the telemetry should be inserted', async () => {
      await createNispePlantTelemetryController(
        request as Request<
          unknown,
          PlantTelemetry | { msg: string },
          PlantTelemetry,
          unknown
        >,
        response as Response<PlantTelemetry | { msg: string }, { id: string }>,
        next,
      );
      await expect(response.status).toHaveBeenCalledWith(201);
    });
    test('and it fails then an error should be thrown', async () => {
      NispePlantTelemetryModel.create = jest
        .fn()
        .mockRejectedValue(new Error('mockedError'));
      await createNispePlantTelemetryController(
        request as Request<
          unknown,
          PlantTelemetry | { msg: string },
          PlantTelemetry,
          unknown
        >,
        response as Response<PlantTelemetry | { msg: string }, { id: string }>,
        next,
      );
      await expect(next).toHaveBeenCalled();
    });
  });

  describe('when a request to get a plant telemetry is made', () => {
    const request = {} as Partial<Request>;

    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Partial<Response>;

    NispePlantTelemetryModel.find = jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(telemetryListMock),
    });

    test('and it is successfull then telemetry should be returned', async () => {
      await retrieveNispePlantTelemetryController(
        request as Request,
        response as Response<TelemetryResponse | { msg: string }>,
        next,
      );
      await expect(response.json).toHaveBeenCalledWith(telemetryListMock);
    });
    test('and it fails then an error should be thrown', async () => {
      NispePlantTelemetryModel.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockRejectedValue(null),
      });
      await retrieveNispePlantTelemetryController(
        request as Request,
        response as Response<TelemetryResponse | { msg: string }>,
        next,
      );
      await expect(next).toHaveBeenCalled();
    });
    test('and it is the latest telemetry, then the most recent telemetry should be returned', async () => {
      NispePlantTelemetryModel.findOne = jest.fn().mockReturnValue({
        sort: jest.fn().mockReturnValue({
          exec: jest.fn().mockResolvedValue(telemetryListMock[0]),
        }),
      });
      await retrieveLatestNispePlantTelemetryController(
        request as Request,
        response as Response<PlantTelemetry | { msg: string }>,
        next,
      );
      await expect(response.json).toHaveBeenCalledWith(telemetryListMock[0]);
    });
    test('and it is the latest telemetry, and it fails then an error should be thrown', async () => {
      NispePlantTelemetryModel.findOne = jest.fn().mockReturnValue({
        sort: jest.fn().mockReturnValue({
          exec: jest.fn().mockRejectedValue(null),
        }),
      });
      await retrieveLatestNispePlantTelemetryController(
        request as Request,
        response as Response<PlantTelemetry | { msg: string }>,
        next,
      );
      await expect(next).toHaveBeenCalled();
    });
  });
});
