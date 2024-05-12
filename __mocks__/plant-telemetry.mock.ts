export const plantTelemetryMock = {
  timestamp: 12345,
  measurements: {
    temperature: 12,
    humidity: 24,
    light: 123,
  },
};

export const telemetryListMock = [
  {
    timestamp: 123045,
    measurements: {
      temperature: 12,
      humidity: 24,
      light: 123,
    },
  },
  {
    timestamp: 214143,
    measurements: {
      temperature: 23,
      humidity: 43,
      light: 2414,
    },
  },
  {
    timestamp: 221143,
    measurements: {
      temperature: 26,
      humidity: 8,
      light: 2414,
    },
  },
  {
    timestamp: 231143,
    measurements: {
      temperature: 21,
      humidity: 12,
      light: 2000,
    },
  },
  {
    timestamp: 331143,
    measurements: {
      temperature: 29,
      humidity: 22,
      light: 1500,
    },
  },
  {
    timestamp: 542545,
    measurements: {
      temperature: 23,
      humidity: 67,
      light: 4242,
    },
  },
];

export const filteredHistoricalTelemetry = [
  {
    timestamp: 221143,
    measurements: {
      temperature: 26,
      humidity: 8,
      light: 2414,
    },
  },
  {
    timestamp: 231143,
    measurements: {
      temperature: 21,
      humidity: 12,
      light: 2000,
    },
  },
  {
    timestamp: 331143,
    measurements: {
      temperature: 29,
      humidity: 22,
      light: 1500,
    },
  },
];
