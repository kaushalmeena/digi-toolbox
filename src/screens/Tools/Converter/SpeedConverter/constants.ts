export const UnitMap = {
  KILOMETERS_PER_HOUR: "km/h",
  METERS_PER_SECOND: "m/s",
  MILES_PER_HOUR: "mi/h",
  FEET_PER_SECOND: "ft/s",
  KNOT: "kt"
};

export const ConversionMap = {
  [`${UnitMap.METERS_PER_SECOND}->${UnitMap.METERS_PER_SECOND}`]: 1,
  [`${UnitMap.KILOMETERS_PER_HOUR}->${UnitMap.METERS_PER_SECOND}`]: 0.27777777777778,
  [`${UnitMap.MILES_PER_HOUR}->${UnitMap.METERS_PER_SECOND}`]: 0.44704,
  [`${UnitMap.FEET_PER_SECOND}->${UnitMap.METERS_PER_SECOND}`]: 0.3048,
  [`${UnitMap.KNOT}->${UnitMap.METERS_PER_SECOND}`]: 0.51444444444444,
  [`${UnitMap.METERS_PER_SECOND}->${UnitMap.KILOMETERS_PER_HOUR}`]: 3.6,
  [`${UnitMap.METERS_PER_SECOND}->${UnitMap.MILES_PER_HOUR}`]: 2.2369362920544,
  [`${UnitMap.METERS_PER_SECOND}->${UnitMap.FEET_PER_SECOND}`]: 3.2808398950131,
  [`${UnitMap.METERS_PER_SECOND}->${UnitMap.KNOT}`]: 1.9438444924406
};

export const SelectOptions = [
  {
    label: "Kilometers/hour",
    value: UnitMap.KILOMETERS_PER_HOUR
  },
  {
    label: "Meters/second",
    value: UnitMap.METERS_PER_SECOND
  },
  {
    label: "Miles/hour",
    value: UnitMap.MILES_PER_HOUR
  },
  {
    label: "Feet/second",
    value: UnitMap.FEET_PER_SECOND
  },
  {
    label: "Knot",
    value: UnitMap.KNOT
  }
];
