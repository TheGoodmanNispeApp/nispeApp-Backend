import { Schema } from 'mongoose';

export type PlantTelemetry = {
  timestamp: number;
  measurements: {
    temperature: number;
    humidity: number;
    light: number;
  };
};

export type TelemetryResponse = PlantTelemetry[];

export const plantTelemetrySchema = new Schema<PlantTelemetry>({
  timestamp: Number,
  measurements: {
    temperature: Number,
    humidity: Number,
    light: Number,
  },
});
