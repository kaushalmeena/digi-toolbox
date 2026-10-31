// Unicode-safe base64 helpers (btoa/atob only handle Latin-1 on their own).
export function encodeBase64(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

export function decodeBase64(base64: string): string {
  const bytes = Uint8Array.from(atob(base64.trim()), (char) =>
    char.charCodeAt(0)
  );
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

export function decodeBase64Url(value: string): string {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padding = (4 - (normalized.length % 4)) % 4;
  return decodeBase64(normalized + "=".repeat(padding));
}
