export const convertColor = (input: string, from = "", to = ""): string => {
  let result = "";
  let tempRGBArray = null;

  switch (from) {
    case "hex":
      tempRGBArray = convertHEXToRGBArray(input);
      break;
    case "rgb":
      tempRGBArray = convertRGBToRGBArray(input);
      break;
    case "hsl":
      tempRGBArray = convertHSLToRGBArray(input);
      break;
  }

  switch (to) {
    case "hex":
      result = convertRGBArrayToHex(tempRGBArray);
      break;
    case "rgb":
      result = convertRGBArrayToRGB(tempRGBArray);
      break;
    case "hsl":
      result = convertRGBArrayToHSL(tempRGBArray);
      break;
  }

  return result;
};

function convertHEXToRGBArray(input: string): number[] {
  const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const match = HEX_REGEX.exec(input);
  if (!match) {
    throw new Error("Invalid HEX color input.");
  }

  const R = parseInt(match[1], 16);
  const G = parseInt(match[2], 16);
  const B = parseInt(match[3], 16);

  return [R, G, B];
}

function convertRGBArrayToHex(rgbArr: number[]): string {
  return "#" + rgbArr.map((x) => x.toString(16).padStart(2, "0")).join("");
}

function convertRGBToRGBArray(input: string): number[] {
  const RGB_REGEX = /^(?:rgb\()?\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)?$/i;
  const match = RGB_REGEX.exec(input);
  if (!match) {
    throw new Error("Invalid RGB color input.");
  }

  const R = parseInt(match[1], 10);
  const G = parseInt(match[2], 10);
  const B = parseInt(match[3], 10);

  return [R, G, B];
}

function convertRGBArrayToRGB(rgbArr: number[]): string {
  const R = rgbArr[0];
  const G = rgbArr[1];
  const B = rgbArr[2];
  return `rgb(${R}, ${G}, ${B})`;
}

function convertHSLToRGBArray(input: string): number[] {
  const HSL_REGEX = /^(?:hsl\()?\s*(\d{1,3})\s*,\s*(\d*(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?%\s*)\)?$/i;
  const match = HSL_REGEX.exec(input);
  if (!match) {
    throw new Error("Invalid HSL color input.");
  }

  const H = parseInt(match[1], 10);
  const S = parseInt(match[2], 10);
  const L = parseInt(match[3], 10);

  const h = H / 360.0;
  const s = S / 100.0;
  const l = L / 100.0;

  let r = 0;
  let g = 0;
  let b = 0;

  if (s === 0) {
    r = l;
    g = l;
    b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = HUEToRGB(p, q, h + 1 / 3);
    g = HUEToRGB(p, q, h);
    b = HUEToRGB(p, q, h - 1 / 3);
  }

  const R = Math.round(r * 255);
  const G = Math.round(g * 255);
  const B = Math.round(b * 255);

  return [R, G, B];
}

function convertRGBArrayToHSL(rgbArr: number[]): string {
  const R = rgbArr[0];
  const G = rgbArr[1];
  const B = rgbArr[2];

  const r = R / 255;
  const g = G / 255;
  const b = B / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h = h / 6;
  }

  const H = Math.round(h * 360);
  const S = Math.round(s * 100);
  const L = Math.round(l * 100);

  return `hsl(${H}, ${S}%, ${L}%)`;
}

function HUEToRGB(P: number, Q: number, T: number) {
  if (T < 0) T += 1;
  if (T > 1) T -= 1;
  if (T < 1 / 6) return P + (Q - P) * 6 * T;
  if (T < 1 / 2) return Q;
  if (T < 2 / 3) return P + (Q - P) * (2 / 3 - T) * 6;
  return P;
}
