export function fetchDarkMode(): boolean {
  let mode = null;
  const value = localStorage.getItem("darkMode");
  if (value) {
    mode = value === "1";
  } else {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    mode = media.matches;
  }
  return mode;
}

export function storeDarkMode(mode: boolean): void {
  const value = mode ? "1" : "0";
  localStorage.setItem("darkMode", value);
}
