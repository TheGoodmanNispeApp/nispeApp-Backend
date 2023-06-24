import mongoose from 'mongoose';
import { PlantTelemetry, plantTelemetrySchema } from '../plants-schema.js';

export const NispePlantTelemetryModel = mongoose.model<PlantTelemetry>(
  'Nispe',
  plantTelemetrySchema,
  'Nispe',
);
