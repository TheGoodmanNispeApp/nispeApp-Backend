import { Request, Response } from 'express';
import { plantTelemetryMock } from '../../../../../__mocks__/plant-telemetry.mock.js';
import { PlantTelemetry } from '../../plants-schema.js';
import { createNispePlantTelemetryController } from '../nispe-plant-controller.js';
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
          { plantTelemetry: PlantTelemetry } | { msg: string },
          PlantTelemetry,
          unknown
        >,
        response as Response<
          { plantTelemetry: PlantTelemetry } | { msg: string },
          { id: string }
        >,
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
          { plantTelemetry: PlantTelemetry } | { msg: string },
          PlantTelemetry,
          unknown
        >,
        response as Response<
          { plantTelemetry: PlantTelemetry } | { msg: string },
          { id: string }
        >,
        next,
      );
      await expect(next).toHaveBeenCalled();
    });
  });
});
