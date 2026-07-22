// A few conversion helpers reach for `window.btoa` / `window.atob`, which exist
// as globals in Node but not under a `window` namespace. Alias it so those
// pure functions can be unit-tested without pulling in a full DOM environment.
if (!("window" in globalThis)) {
  (globalThis as unknown as { window: typeof globalThis }).window = globalThis;
}
