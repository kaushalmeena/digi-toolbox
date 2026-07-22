const decodeBase64Url = (value: string): string => {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(
    normalized.length + ((4 - (normalized.length % 4)) % 4),
    "="
  );
  return decodeURIComponent(escape(window.atob(padded)));
};

export const decodeJWT = (input: string): string => {
  const token = input.trim();
  const parts = token.split(".");
  if (parts.length < 2) {
    throw new Error(
      "Invalid JWT: expected at least a header and payload (header.payload.signature)."
    );
  }

  let header: unknown;
  let payload: unknown;
  try {
    header = JSON.parse(decodeBase64Url(parts[0]));
    payload = JSON.parse(decodeBase64Url(parts[1]));
  } catch {
    throw new Error(
      "Invalid JWT: header or payload is not valid base64url JSON."
    );
  }

  return JSON.stringify({ header, payload }, null, 2);
};
