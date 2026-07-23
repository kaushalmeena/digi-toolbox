import { describe, expect, it } from "vitest";
import { convertBase } from "@/screens/Tools/Converter/BaseConverter/utils";
import { Units as ColorUnits } from "@/screens/Tools/Converter/ColorConverter/constants";
import { convertColor } from "@/screens/Tools/Converter/ColorConverter/utils";
import {
  ConversionMap as LengthConversionMap,
  Units as LengthUnits
} from "@/screens/Tools/Converter/LengthConverter/constants";
import { Units as TempUnits } from "@/screens/Tools/Converter/TemperatureConverter/constants";
import { convertTemperature } from "@/screens/Tools/Converter/TemperatureConverter/utils";
import { createConvertFunction } from "@/utils/unitUtils";

describe("Temperature converter", () => {
  it("converts between scales", () => {
    expect(
      convertTemperature("100", TempUnits.CELSIUS, TempUnits.FAHRENHEIT)
    ).toBe("212");
    expect(convertTemperature("0", TempUnits.CELSIUS, TempUnits.KELVIN)).toBe(
      "273.15"
    );
  });
});

describe("Unit converter (createConvertFunction / length)", () => {
  const convertLength = createConvertFunction(
    LengthConversionMap,
    LengthUnits.METER
  );

  it("converts kilometers to meters and meters to centimeters", () => {
    expect(convertLength("1", LengthUnits.KILOMETER, LengthUnits.METER)).toBe(
      "1000"
    );
    expect(convertLength("1", LengthUnits.METER, LengthUnits.CENTIMETER)).toBe(
      "100"
    );
  });
});

describe("Base converter", () => {
  it("converts between bases", () => {
    expect(convertBase("1010", "base-02", "base-10")).toBe("10");
    expect(convertBase("255", "base-10", "base-16")).toBe("ff");
  });
});

describe("Color converter", () => {
  it("converts hex to rgb and back", () => {
    expect(convertColor("#ff0000", ColorUnits.HEX, ColorUnits.RGB)).toBe(
      "rgb(255, 0, 0)"
    );
    expect(convertColor("rgb(255, 0, 0)", ColorUnits.RGB, ColorUnits.HEX)).toBe(
      "#ff0000"
    );
  });

  it("converts hex to hsl", () => {
    expect(convertColor("#ff0000", ColorUnits.HEX, ColorUnits.HSL)).toBe(
      "hsl(0, 100%, 50%)"
    );
  });
});
