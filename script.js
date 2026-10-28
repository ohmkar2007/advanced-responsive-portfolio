// Small progressive enhancement: current year and accessible demo-form feedback.
document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const status = document.querySelector("#form-status");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      status.textContent = "Please check the highlighted fields and try again.";
      return;
    }

    status.textContent =
      "Your form passed browser validation. This demonstration does not send or store messages.";
  });
}



/* Light/dark theme toggle */
const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "light") {
    document.documentElement.dataset.theme = "light";
  }

  function updateThemeButton() {
    const isLight =
      document.documentElement.dataset.theme === "light";

    themeToggle.textContent = isLight
      ? "🌙 Dark mode"
      : "☀️ Light mode";

    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
  }

  updateThemeButton();

  themeToggle.addEventListener("click", () => {
    const isLight =
      document.documentElement.dataset.theme === "light";

    if (isLight) {
      delete document.documentElement.dataset.theme;
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.dataset.theme = "light";
      localStorage.setItem("portfolio-theme", "light");
    }

    updateThemeButton();
  });
}
