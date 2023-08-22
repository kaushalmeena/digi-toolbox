export const Units = {
  KILOMETERS_PER_HOUR: "km/h",
  METERS_PER_SECOND: "m/s",
  MILES_PER_HOUR: "mi/h",
  FEET_PER_SECOND: "ft/s",
  KNOT: "kt"
};

export const ConversionMap = {
  [`${Units.METERS_PER_SECOND}->${Units.METERS_PER_SECOND}`]: 1,
  [`${Units.KILOMETERS_PER_HOUR}->${Units.METERS_PER_SECOND}`]: 0.27777777777778,
  [`${Units.MILES_PER_HOUR}->${Units.METERS_PER_SECOND}`]: 0.44704,
  [`${Units.FEET_PER_SECOND}->${Units.METERS_PER_SECOND}`]: 0.3048,
  [`${Units.KNOT}->${Units.METERS_PER_SECOND}`]: 0.51444444444444,
  [`${Units.METERS_PER_SECOND}->${Units.KILOMETERS_PER_HOUR}`]: 3.6,
  [`${Units.METERS_PER_SECOND}->${Units.MILES_PER_HOUR}`]: 2.2369362920544,
  [`${Units.METERS_PER_SECOND}->${Units.FEET_PER_SECOND}`]: 3.2808398950131,
  [`${Units.METERS_PER_SECOND}->${Units.KNOT}`]: 1.9438444924406
};

export const SelectOptions = [
  {
    label: "Kilometers/hour",
    value: Units.KILOMETERS_PER_HOUR
  },
  {
    label: "Meters/second",
    value: Units.METERS_PER_SECOND
  },
  {
    label: "Miles/hour",
    value: Units.MILES_PER_HOUR
  },
  {
    label: "Feet/second",
    value: Units.FEET_PER_SECOND
  },
  {
    label: "Knot",
    value: Units.KNOT
  }
];
