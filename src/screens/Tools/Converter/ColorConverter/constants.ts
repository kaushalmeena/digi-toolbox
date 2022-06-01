import { SelectOption } from "../../../../types";

export const enum ColorUnits {
  HEX = "hex",
  RGB = "rgb",
  HSL = "hsl"
}

export const ColorSelectOptions: SelectOption[] = [
  {
    label: "HEX",
    value: ColorUnits.HEX
  },
  {
    label: "RGB",
    value: ColorUnits.RGB
  },
  {
    label: "HSL",
    value: ColorUnits.HSL
  }
];

export const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

export const RGB_REGEX =
  /^(?:rgb\()?\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)?$/i;

export const HSL_REGEX =
  /^(?:hsl\()?\s*(\d{1,3})\s*,\s*(\d*(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?%\s*)\)?$/i;
