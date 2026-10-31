export const HASH_ALGORITHMS = [
  "SHA-1",
  "SHA-256",
  "SHA-384",
  "SHA-512"
] as const;

export type HashAlgorithm = (typeof HASH_ALGORITHMS)[number];

export async function generateHash(
  input: string | ArrayBuffer,
  algorithm: HashAlgorithm
): Promise<string> {
  const data =
    typeof input === "string" ? new TextEncoder().encode(input) : input;
  const digest = await crypto.subtle.digest(algorithm, data);
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

export const MAX_UUIDS = 1000;

export function generateUUIDs(count: number): string[] {
  const total = Math.max(1, Math.min(Math.floor(count) || 1, MAX_UUIDS));
  return Array.from({ length: total }, () => crypto.randomUUID());
}
