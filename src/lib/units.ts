import { formatNumber } from "./format";

/**
 * A unit of measure, defined by how to get to and from its dimension's base
 * unit. Linear units only need a factor; affine ones (temperature) supply both
 * functions.
 */
export type Unit = {
  id: string;
  label: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
};

/** A unit where 1 of it equals `factor` base units. */
export function linearUnit(
  id: string,
  label: string,
  symbol: string,
  factor: number
): Unit {
  return {
    id,
    label,
    symbol,
    toBase: (value) => value * factor,
    fromBase: (value) => value / factor
  };
}

export function convertUnit(value: number, from: Unit, to: Unit): number {
  return to.fromBase(from.toBase(value));
}

/** Parses `input` and converts it to every unit; empty strings when invalid. */
export function convertToAll(
  input: string,
  from: Unit,
  units: readonly Unit[]
): Map<string, string> {
  const value = Number.parseFloat(input);
  return new Map(
    units.map((unit) => [
      unit.id,
      Number.isNaN(value) ? "" : formatNumber(convertUnit(value, from, unit))
    ])
  );
}
