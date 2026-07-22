import { describe, expect, it } from "vitest";
import { createConvertFunction } from "@/utils";
import {
  ConversionMap as LengthConversionMap,
  Units as LengthUnits
} from "./LengthConverter/constants";
import { Units as TempUnits } from "./TemperatureConverter/constants";
import { convertTemperature } from "./TemperatureConverter/utils";

describe("Temperature converter", () => {
  it("converts Celsius to Fahrenheit", () => {
    expect(
      convertTemperature("100", TempUnits.CELSIUS, TempUnits.FAHRENHEIT)
    ).toBe("212");
  });

  it("converts Celsius to Kelvin", () => {
    expect(convertTemperature("0", TempUnits.CELSIUS, TempUnits.KELVIN)).toBe(
      "273.15"
    );
  });

  it("converts Fahrenheit to Celsius", () => {
    expect(
      convertTemperature("32", TempUnits.FAHRENHEIT, TempUnits.CELSIUS)
    ).toBe("0");
  });
});

describe("Length converter (createConvertFunction)", () => {
  const convertLength = createConvertFunction(
    LengthConversionMap,
    LengthUnits.METER
  );

  it("converts kilometers to meters", () => {
    expect(convertLength("1", LengthUnits.KILOMETER, LengthUnits.METER)).toBe(
      "1000"
    );
  });

  it("converts meters to centimeters", () => {
    expect(convertLength("1", LengthUnits.METER, LengthUnits.CENTIMETER)).toBe(
      "100"
    );
  });
});
