function updateButton({ buttonEl: buttonElement, isDark: isDarkTheme }) {
    buttonElement.classList = isDarkTheme ? "theme" : "theme theme--light";
    buttonElement.setAttribute(
        "aria-label",
        isDarkTheme ? "Change to light theme" : "Change to dark theme"
    );
}

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    return localStorageTheme !== null
        ? localStorageTheme
        : systemSettingDark.matches
            ? "dark"
            : "light";
}

function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark,
});

updateButton({
    buttonEl: button,
    isDark: currentThemeSetting === "dark",
});
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
    currentThemeSetting = newTheme;
});

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});