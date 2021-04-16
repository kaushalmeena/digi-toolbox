export function fetchDarkMode(): boolean {
  const value = localStorage.getItem("darkMode");
  const mode = value === "1" ? true : false;
  return mode;
}

export function storeDarkMode(mode: boolean): void {
  const value = mode ? "1" : "0";
  localStorage.setItem("darkMode", value);
}
