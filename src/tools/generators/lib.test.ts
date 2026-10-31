import { describe, expect, it } from "vitest";

import {
  clampPasswordLength,
  estimateEntropyBits,
  generateHash,
  generateLorem,
  generatePassword,
  generateUUIDs,
  hasCharacterClass,
  LOREM_MAX_COUNT,
  type LoremOptions,
  passwordStrength,
  type PasswordOptions,
  type RandomInt,
  secureRandomInt
} from "./lib";

describe("Hash generator", () => {
  it("computes a known SHA-256 digest", async () => {
    expect(await generateHash("abc", "SHA-256")).toBe(
      "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
    );
  });
});

describe("UUID generator", () => {
  const V4 =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  it("generates the requested number of valid v4 UUIDs", () => {
    const uuids = generateUUIDs(3);
    expect(uuids).toHaveLength(3);
    for (const uuid of uuids) {
      expect(uuid).toMatch(V4);
    }
  });

  it("clamps to at least one", () => {
    expect(generateUUIDs(0)).toHaveLength(1);
  });
});

const first: RandomInt = () => 0;
const last: RandomInt = (max) => max - 1;

/** A repeatable pseudo-random sequence (mulberry32). */
function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const words = (text: string) => text.split(/\s+/).filter(Boolean);

describe("Password generator", () => {
  const ALL: PasswordOptions = {
    length: 16,
    uppercase: true,
    lowercase: true,
    digits: true,
    symbols: true,
    excludeAmbiguous: false
  };

  it("generates the requested length", () => {
    expect(generatePassword(ALL)).toHaveLength(16);
    expect(generatePassword({ ...ALL, length: 64 })).toHaveLength(64);
  });

  it("clamps the length to 4–128", () => {
    expect(generatePassword({ ...ALL, length: 1 })).toHaveLength(4);
    expect(generatePassword({ ...ALL, length: 500 })).toHaveLength(128);
    expect(clampPasswordLength(Number.NaN)).toBe(4);
  });

  it("includes at least one character from every enabled class", () => {
    for (let run = 0; run < 50; run++) {
      const password = generatePassword({ ...ALL, length: 4 });
      expect(password).toMatch(/[A-Z]/);
      expect(password).toMatch(/[a-z]/);
      expect(password).toMatch(/\d/);
      expect(password).toMatch(/[^A-Za-z\d]/);
    }
  });

  it("only uses enabled classes", () => {
    const digits = generatePassword({
      ...ALL,
      uppercase: false,
      lowercase: false,
      symbols: false,
      length: 32
    });
    expect(digits).toMatch(/^\d{32}$/);
  });

  it("is deterministic with an injected randomInt", () => {
    // One char per class, then pool fill: [A, a, 0, !, A, A]. Shuffling with
    // j = 0 cycles the front; with j = i it's the identity.
    expect(generatePassword({ ...ALL, length: 6 }, first)).toBe("a0!AAA");
    expect(generatePassword({ ...ALL, length: 6 }, last)).toBe("Zz9~~~");
  });

  it("excludes ambiguous characters", () => {
    const options = {
      ...ALL,
      symbols: false,
      excludeAmbiguous: true,
      length: 128
    };
    for (let run = 0; run < 20; run++) {
      expect(generatePassword(options)).not.toMatch(/[Il1O0o]/);
    }
    expect(generatePassword({ ...options, length: 4 }, last)).toBe("Zz99");
  });

  it("reports whether any character class is enabled", () => {
    expect(hasCharacterClass(ALL)).toBe(true);
    expect(
      hasCharacterClass({
        ...ALL,
        uppercase: false,
        lowercase: false,
        digits: false,
        symbols: false
      })
    ).toBe(false);
  });

  it("throws when no character class is enabled", () => {
    expect(() =>
      generatePassword({
        ...ALL,
        uppercase: false,
        lowercase: false,
        digits: false,
        symbols: false
      })
    ).toThrow(/at least one/);
  });

  it("draws unbiased secure integers in range", () => {
    for (let run = 0; run < 200; run++) {
      const value = secureRandomInt(7);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(7);
      expect(Number.isInteger(value)).toBe(true);
    }
  });

  it("estimates entropy from length and pool size", () => {
    expect(
      estimateEntropyBits({
        ...ALL,
        uppercase: false,
        lowercase: false,
        symbols: false,
        length: 10
      })
    ).toBeCloseTo(10 * Math.log2(10));
    expect(estimateEntropyBits({ ...ALL, length: 8 })).toBeCloseTo(
      8 * Math.log2(26 + 26 + 10 + 27)
    );
    expect(
      estimateEntropyBits({
        ...ALL,
        uppercase: false,
        lowercase: false,
        digits: false,
        symbols: false
      })
    ).toBe(0);
  });

  it("labels strength by entropy", () => {
    expect(passwordStrength(30)).toBe("weak");
    expect(passwordStrength(50)).toBe("fair");
    expect(passwordStrength(80)).toBe("strong");
    expect(passwordStrength(120)).toBe("very strong");
    expect(passwordStrength(estimateEntropyBits(ALL))).toBe("very strong");
  });
});

describe("Lorem ipsum generator", () => {
  it("generates the requested number of words", () => {
    const text = generateLorem(
      { count: 25, unit: "words", startWithLorem: false },
      seeded(1)
    );
    expect(words(text)).toHaveLength(25);
    expect(text).toMatch(/^[a-z ]+$/);
  });

  it("starts words with the classic opening, truncated to count", () => {
    expect(
      generateLorem({ count: 3, unit: "words", startWithLorem: true })
    ).toBe("lorem ipsum dolor");
    expect(
      generateLorem({ count: 10, unit: "words", startWithLorem: true })
    ).toMatch(
      /^lorem ipsum dolor sit amet consectetur adipiscing elit \w+ \w+$/
    );
  });

  it("generates capitalized sentences of 6–14 words", () => {
    const text = generateLorem(
      { count: 40, unit: "sentences", startWithLorem: false },
      seeded(2)
    );
    const sentences = text.split(/(?<=\.) /);
    expect(sentences).toHaveLength(40);
    for (const sentence of sentences) {
      expect(sentence).toMatch(/^[A-Z][a-z, ]+\.$/);
      expect(words(sentence).length).toBeGreaterThanOrEqual(6);
      expect(words(sentence).length).toBeLessThanOrEqual(14);
    }
    expect(text).toContain(",");
  });

  it("opens sentences and paragraphs with Lorem ipsum when asked", () => {
    expect(
      generateLorem({ count: 2, unit: "sentences", startWithLorem: true })
    ).toMatch(
      /^Lorem ipsum dolor sit amet, consectetur adipiscing elit\. [A-Z]/
    );
    const paragraphs = generateLorem(
      { count: 3, unit: "paragraphs", startWithLorem: true },
      seeded(3)
    ).split("\n\n");
    expect(paragraphs[0]).toMatch(/^Lorem ipsum dolor sit amet/);
    expect(paragraphs[1]).not.toMatch(/^Lorem ipsum dolor sit amet/);
  });

  it("generates paragraphs of 3–6 sentences", () => {
    const paragraphs = generateLorem(
      { count: 20, unit: "paragraphs", startWithLorem: false },
      seeded(4)
    ).split("\n\n");
    expect(paragraphs).toHaveLength(20);
    for (const paragraph of paragraphs) {
      const count = paragraph.split(/(?<=\.) /).length;
      expect(count).toBeGreaterThanOrEqual(3);
      expect(count).toBeLessThanOrEqual(6);
    }
  });

  it("is deterministic with an injected random source", () => {
    const options: LoremOptions = {
      count: 2,
      unit: "paragraphs",
      startWithLorem: false
    };
    expect(generateLorem(options, seeded(5))).toBe(
      generateLorem(options, seeded(5))
    );
    expect(
      generateLorem({ count: 3, unit: "words", startWithLorem: false }, () => 0)
    ).toBe("lorem lorem lorem");
  });

  it("clamps the count", () => {
    expect(
      words(generateLorem({ count: 0, unit: "words", startWithLorem: false }))
    ).toHaveLength(1);
    expect(
      words(
        generateLorem({ count: 5000, unit: "words", startWithLorem: false })
      )
    ).toHaveLength(LOREM_MAX_COUNT);
  });
});
