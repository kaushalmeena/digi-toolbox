const BYTE_UNITS = ["B", "KB", "MB", "GB"];

export function formatBytes(bytes: number): string {
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < BYTE_UNITS.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${unit === 0 ? value : value.toFixed(1)} ${BYTE_UNITS[unit]}`;
}

/**
 * Renders a computed number without floating-point noise
 * (0.30480000000000004 → "0.3048") while keeping very large or small
 * magnitudes in exponent form.
 */
export function formatNumber(value: number): string {
  if (!Number.isFinite(value)) {
    return "";
  }
  return String(Number(value.toPrecision(12)));
}

export function utf8ByteLength(text: string): number {
  return new TextEncoder().encode(text).length;
}
