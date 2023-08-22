export const Units = {
  HEX: "hex",
  RGB: "rgb",
  HSL: "hsl"
};

export const SelectOptions = [
  {
    label: "HEX",
    value: Units.HEX
  },
  {
    label: "RGB",
    value: Units.RGB
  },
  {
    label: "HSL",
    value: Units.HSL
  }
];

export const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

export const RGB_REGEX =
  /^(?:rgb\()?\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)?$/i;

export const HSL_REGEX =
  /^(?:hsl\()?\s*(\d{1,3})\s*,\s*(\d*(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?%\s*)\)?$/i;
