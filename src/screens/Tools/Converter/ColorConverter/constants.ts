import { ISelectOption } from "../../../../interfaces";

export const enum COLOR_UNITS {
  HEX = "hex",
  RGB = "rgb",
  HSL = "hsl"
}

export const ColorSelectOptions: ISelectOption[] = [
  {
    label: "HEX",
    value: COLOR_UNITS.HEX
  },
  {
    label: "RGB",
    value: COLOR_UNITS.RGB
  },
  {
    label: "HSL",
    value: COLOR_UNITS.HSL
  }
];

export const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

export const RGB_REGEX =
  /^(?:rgb\()?\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)?$/i;

export const HSL_REGEX =
  /^(?:hsl\()?\s*(\d{1,3})\s*,\s*(\d*(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?%\s*)\)?$/i;
