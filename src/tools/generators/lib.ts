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

/** Returns a uniformly distributed integer in [0, max). */
export type RandomInt = (max: number) => number;

/** Unbiased CSPRNG integers: rejection sampling over 32-bit draws. */
export function secureRandomInt(max: number): number {
  const range = 2 ** 32;
  const limit = range - (range % max);
  const buffer = new Uint32Array(1);
  for (;;) {
    crypto.getRandomValues(buffer);
    if (buffer[0] < limit) {
      return buffer[0] % max;
    }
  }
}

export type PasswordOptions = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  digits: boolean;
  symbols: boolean;
  /** Drops look-alike characters such as I, l, 1, O, 0 and o. */
  excludeAmbiguous: boolean;
};

export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_MAX_LENGTH = 128;

const CHARACTER_CLASSES = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  digits: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{};:,.<>?/~"
} as const;

export const AMBIGUOUS_CHARACTERS = "Il1O0o";

function characterClasses(options: PasswordOptions): string[] {
  return (Object.keys(CHARACTER_CLASSES) as (keyof typeof CHARACTER_CLASSES)[])
    .filter((name) => options[name])
    .map((name) =>
      options.excludeAmbiguous
        ? [...CHARACTER_CLASSES[name]]
            .filter((char) => !AMBIGUOUS_CHARACTERS.includes(char))
            .join("")
        : CHARACTER_CLASSES[name]
    );
}

export function hasCharacterClass(options: PasswordOptions): boolean {
  return (
    options.uppercase || options.lowercase || options.digits || options.symbols
  );
}

export function clampPasswordLength(length: number): number {
  return Math.max(
    PASSWORD_MIN_LENGTH,
    Math.min(Math.floor(length) || PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)
  );
}

/**
 * Generates a password containing at least one character from every enabled
 * class, shuffled so the guaranteed characters aren't at fixed positions.
 */
export function generatePassword(
  options: PasswordOptions,
  randomInt: RandomInt = secureRandomInt
): string {
  const classes = characterClasses(options);
  if (classes.length === 0) {
    throw new Error("Enable at least one character set");
  }
  const length = clampPasswordLength(options.length);
  const pool = classes.join("");
  const chars = classes.map((set) => set[randomInt(set.length)]);
  while (chars.length < length) {
    chars.push(pool[randomInt(pool.length)]);
  }
  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}

/** Entropy of a uniformly random password: length × log2(pool size). */
export function estimateEntropyBits(options: PasswordOptions): number {
  const poolSize = characterClasses(options).join("").length;
  if (poolSize === 0) {
    return 0;
  }
  return clampPasswordLength(options.length) * Math.log2(poolSize);
}

export type PasswordStrength = "weak" | "fair" | "strong" | "very strong";

export function passwordStrength(entropyBits: number): PasswordStrength {
  if (entropyBits < 45) return "weak";
  if (entropyBits < 70) return "fair";
  if (entropyBits < 100) return "strong";
  return "very strong";
}

export type LoremUnit = "paragraphs" | "sentences" | "words";

export type LoremOptions = {
  count: number;
  unit: LoremUnit;
  startWithLorem: boolean;
};

export const LOREM_MAX_COUNT = 1000;

const LOREM_OPENING =
  "lorem ipsum dolor sit amet consectetur adipiscing elit".split(" ");

const LOREM_WORDS = (
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod " +
  "tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam " +
  "quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo " +
  "consequat duis aute irure in reprehenderit voluptate velit esse cillum " +
  "eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident " +
  "sunt culpa qui officia deserunt mollit anim id est laborum perspiciatis " +
  "unde omnis iste natus error voluptatem accusantium doloremque laudantium " +
  "totam rem aperiam eaque ipsa quae ab illo inventore veritatis quasi " +
  "architecto beatae vitae dicta explicabo nemo ipsam quia voluptas " +
  "aspernatur aut odit fugit consequuntur magni dolores eos ratione sequi " +
  "nesciunt neque porro quisquam dolorem adipisci numquam eius modi tempora " +
  "incidunt magnam quaerat"
).split(" ");

/** Integer in [min, max] from a `() => [0, 1)` source. */
function randomBetween(random: () => number, min: number, max: number) {
  return min + Math.floor(random() * (max - min + 1));
}

function randomWord(random: () => number): string {
  return LOREM_WORDS[Math.floor(random() * LOREM_WORDS.length)];
}

function toSentence(words: string[], random: () => number): string {
  const result = [...words];
  // Longer sentences sometimes get a comma somewhere in the middle.
  if (result.length >= 8 && random() < 0.5) {
    const at = randomBetween(random, 2, result.length - 4);
    result[at] += ",";
  }
  const text = result.join(" ");
  return `${text[0].toUpperCase()}${text.slice(1)}.`;
}

function randomSentence(random: () => number): string {
  const length = randomBetween(random, 6, 14);
  return toSentence(
    Array.from({ length }, () => randomWord(random)),
    random
  );
}

const LOREM_FIRST_SENTENCE =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

/**
 * Classic placeholder text: sentences of 6–14 words, paragraphs of 3–6
 * sentences. `startWithLorem` opens with "Lorem ipsum dolor sit amet…".
 */
export function generateLorem(
  { count, unit, startWithLorem }: LoremOptions,
  random: () => number = Math.random
): string {
  const total = Math.max(1, Math.min(Math.floor(count) || 1, LOREM_MAX_COUNT));

  if (unit === "words") {
    const opening = startWithLorem ? LOREM_OPENING.slice(0, total) : [];
    const rest = Array.from({ length: total - opening.length }, () =>
      randomWord(random)
    );
    return [...opening, ...rest].join(" ");
  }

  let first = startWithLorem;
  const sentence = () => {
    if (first) {
      first = false;
      return LOREM_FIRST_SENTENCE;
    }
    return randomSentence(random);
  };

  if (unit === "sentences") {
    return Array.from({ length: total }, sentence).join(" ");
  }
  return Array.from({ length: total }, () =>
    Array.from({ length: randomBetween(random, 3, 6) }, sentence).join(" ")
  ).join("\n\n");
}
