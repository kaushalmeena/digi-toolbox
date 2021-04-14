export function getTheme(): string {
  return localStorage.getItem("theme") || null;
}

export function setTheme(theme: string): void {
  localStorage.setItem("theme", theme);
}
