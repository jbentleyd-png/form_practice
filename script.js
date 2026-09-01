function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "light" ? "dark" : "light";

  const themeButton = document.querySelector([(type = "button")]);
  const newIcon = themeButton.textContent === "🌙" ? "☀️" : "🌙";

  root.className = newTheme;
  themeButton.textContent = newIcon;
}

document.querySelector([(type = "button")]).addEventListener("click", setTheme);
