(function () {
  function getInitialDarkMode() {
    let mode = false;
    const value = localStorage.getItem("darkMode");
    if (value) {
      mode = value === "1";
    } else {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      mode = media.matches;
    }
    return mode;
  }
  const initialTheme = getInitialDarkMode() ? "dark" : "light";
  document.body.setAttribute("data-initial-theme", initialTheme);
})();
