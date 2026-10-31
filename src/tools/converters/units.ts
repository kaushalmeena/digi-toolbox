import { linearUnit as unit, type Unit } from "@/lib/units";

// Each factor is how many base units (the one with factor 1) a unit equals.

export const LENGTH_UNITS: Unit[] = [
  unit("km", "Kilometer", "km", 1000),
  unit("m", "Meter", "m", 1),
  unit("cm", "Centimeter", "cm", 0.01),
  unit("mm", "Millimeter", "mm", 0.001),
  unit("um", "Micrometer", "µm", 1e-6),
  unit("nm", "Nanometer", "nm", 1e-9),
  unit("mi", "Mile", "mi", 1609.344),
  unit("yd", "Yard", "yd", 0.9144),
  unit("ft", "Foot", "ft", 0.3048),
  unit("in", "Inch", "in", 0.0254),
  unit("nmi", "Nautical mile", "nmi", 1852)
];

export const MASS_UNITS: Unit[] = [
  unit("t", "Tonne", "t", 1e6),
  unit("kg", "Kilogram", "kg", 1000),
  unit("g", "Gram", "g", 1),
  unit("mg", "Milligram", "mg", 0.001),
  unit("ug", "Microgram", "µg", 1e-6),
  unit("ct", "Carat", "ct", 0.2),
  unit("q", "Quintal", "q", 100000),
  unit("st", "Stone", "st", 6350.29318),
  unit("lb", "Pound", "lb", 453.59237),
  unit("oz", "Ounce", "oz", 28.349523125)
];

export const AREA_UNITS: Unit[] = [
  unit("km2", "Square kilometer", "km²", 1e6),
  unit("m2", "Square meter", "m²", 1),
  unit("cm2", "Square centimeter", "cm²", 1e-4),
  unit("ha", "Hectare", "ha", 10000),
  unit("ac", "Acre", "ac", 4046.8564224),
  unit("mi2", "Square mile", "mi²", 2589988.110336),
  unit("yd2", "Square yard", "yd²", 0.83612736),
  unit("ft2", "Square foot", "ft²", 0.09290304),
  unit("in2", "Square inch", "in²", 0.00064516)
];

export const SPEED_UNITS: Unit[] = [
  unit("kmh", "Kilometers per hour", "km/h", 1 / 3.6),
  unit("ms", "Meters per second", "m/s", 1),
  unit("mph", "Miles per hour", "mph", 0.44704),
  unit("fts", "Feet per second", "ft/s", 0.3048),
  unit("kt", "Knot", "kt", 1852 / 3600),
  unit("mach", "Mach (sea level)", "Ma", 340.29)
];

export const PRESSURE_UNITS: Unit[] = [
  unit("bar", "Bar", "bar", 100000),
  unit("mbar", "Millibar", "mbar", 100),
  unit("pa", "Pascal", "Pa", 1),
  unit("kpa", "Kilopascal", "kPa", 1000),
  unit("psi", "Pounds per square inch", "psi", 6894.757293168),
  unit("psf", "Pounds per square foot", "lb/ft²", 47.880258980336),
  unit("atm", "Standard atmosphere", "atm", 101325),
  unit("torr", "Torr", "Torr", 101325 / 760)
];

export const ENERGY_UNITS: Unit[] = [
  unit("j", "Joule", "J", 1),
  unit("kj", "Kilojoule", "kJ", 1000),
  unit("cal", "Calorie", "cal", 4.184),
  unit("kcal", "Kilocalorie", "kcal", 4184),
  unit("wh", "Watt hour", "W·h", 3600),
  unit("kwh", "Kilowatt hour", "kW·h", 3.6e6),
  unit("ev", "Electronvolt", "eV", 1.602176634e-19),
  unit("btu", "British thermal unit", "BTU", 1055.05585262),
  unit("hph", "Horsepower hour", "hp·h", 2684519.537696),
  unit("ftlb", "Foot-pound", "ft·lb", 1.3558179483314)
];

export const ANGLE_UNITS: Unit[] = [
  unit("deg", "Degree", "°", 1),
  unit("rad", "Radian", "rad", 180 / Math.PI),
  unit("grad", "Gradian", "grad", 0.9),
  unit("turn", "Turn", "tr", 360),
  unit("arcmin", "Minute of arc", "′", 1 / 60),
  unit("arcsec", "Second of arc", "″", 1 / 3600)
];

export const DATA_SIZE_UNITS: Unit[] = [
  unit("bit", "Bit", "bit", 1 / 8),
  unit("b", "Byte", "B", 1),
  unit("kb", "Kilobyte", "KB", 1e3),
  unit("mb", "Megabyte", "MB", 1e6),
  unit("gb", "Gigabyte", "GB", 1e9),
  unit("tb", "Terabyte", "TB", 1e12),
  unit("pb", "Petabyte", "PB", 1e15),
  unit("kib", "Kibibyte", "KiB", 1024),
  unit("mib", "Mebibyte", "MiB", 1024 ** 2),
  unit("gib", "Gibibyte", "GiB", 1024 ** 3),
  unit("tib", "Tebibyte", "TiB", 1024 ** 4),
  unit("pib", "Pebibyte", "PiB", 1024 ** 5)
];

const DAY = 86400;

export const TIME_UNITS: Unit[] = [
  unit("ns", "Nanosecond", "ns", 1e-9),
  unit("us", "Microsecond", "µs", 1e-6),
  unit("ms", "Millisecond", "ms", 1e-3),
  unit("s", "Second", "s", 1),
  unit("min", "Minute", "min", 60),
  unit("h", "Hour", "h", 3600),
  unit("d", "Day", "d", DAY),
  unit("wk", "Week", "wk", 7 * DAY),
  // Average Gregorian month and year.
  unit("mo", "Month", "mo", 30.436875 * DAY),
  unit("yr", "Year", "yr", 365.2425 * DAY),
  unit("dec", "Decade", "dec", 3652.425 * DAY),
  unit("c", "Century", "c", 36524.25 * DAY)
];

export const TEMPERATURE_UNITS: Unit[] = [
  {
    id: "c",
    label: "Celsius",
    symbol: "°C",
    toBase: (value) => value,
    fromBase: (value) => value
  },
  {
    id: "f",
    label: "Fahrenheit",
    symbol: "°F",
    toBase: (value) => ((value - 32) * 5) / 9,
    fromBase: (value) => (value * 9) / 5 + 32
  },
  {
    id: "k",
    label: "Kelvin",
    symbol: "K",
    toBase: (value) => value - 273.15,
    fromBase: (value) => value + 273.15
  }
];
