import { SelectOption } from "../../../../types";

export const enum SpeedUnits {
  KILOMETERS_PER_HOUR = "km/h",
  METERS_PER_SECOND = "m/s",
  MILES_PER_HOUR = "mi/h",
  FEET_PER_SECOND = "ft/s",
  KNOT = "kt"
}

export const enum SpeedConversationFactors {
  KILOMETERS_PER_HOUR_TO_METERS_PER_SECOND = 0.27777777777778,
  MILES_PER_HOUR_TO_METERS_PER_SECOND = 0.44704,
  FEET_PER_SECOND_TO_METERS_PER_SECOND = 0.3048,
  KNOT_TO_METERS_PER_SECOND = 0.51444444444444,
  METERS_PER_SECOND_TO_KILOMETERS_PER_HOUR = 3.6,
  METERS_PER_SECOND_TO_MILES_PER_HOUR = 2.2369362920544,
  METERS_PER_SECOND_TO_FEET_PER_SECOND = 3.2808398950131,
  METERS_PER_SECOND_TO_KNOT = 1.9438444924406
}

export const SpeedSelectOptions: SelectOption[] = [
  {
    label: "Kilometers/hour",
    value: SpeedUnits.KILOMETERS_PER_HOUR
  },
  {
    label: "Meters/second",
    value: SpeedUnits.METERS_PER_SECOND
  },
  {
    label: "Miles/hour",
    value: SpeedUnits.MILES_PER_HOUR
  },
  {
    label: "Feet/second",
    value: SpeedUnits.FEET_PER_SECOND
  },
  {
    label: "Knot",
    value: SpeedUnits.KNOT
  }
];
