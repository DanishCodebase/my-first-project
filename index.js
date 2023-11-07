
function updateButton({ buttonEl, isDark }) {
    buttonEl.classList = isDark ? "theme" : "theme theme--light";

    const newAriaLabel = isDark ? "Change to light theme" : "Change to dark theme";

    buttonEl.setAttribute("aria-label", newAriaLabel);
}

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark
});

// update on page load
updateButton({
    buttonEl: button,
    isDark: currentThemeSetting === "dark"
});
updateThemeOnHtmlEl({
    theme: currentThemeSetting
});

// update on theme button click
button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    updateButton({
        buttonEl: button,
        isDark: newTheme === "dark"
    });
    updateThemeOnHtmlEl({
        theme: newTheme
    });

    currentThemeSetting = newTheme;
}
);

let s = 0;
show();

function show() {
    let i;
    let slide = document.getElementsByClassName("hide");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    s++;
    if (s > slide.length) {
        s = 1;
    }
    slide[s - 1].style.display = "block";
    setTimeout(show, 1200);
}


$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 84000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
});


document.querySelector(".navbar-toggler").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("toggle-color");
});

document.querySelector(".unmute").addEventListener("click", function () {
    document.querySelector(".unmute").classList.toggle("d-none");
    document.querySelector(".mute").classList.toggle("d-none");
    document.querySelector(".lap").muted = false;
});

document.querySelector(".mute").addEventListener("click", function () {
    document.querySelector(".mute").classList.toggle("d-none");
    document.querySelector(".unmute").classList.toggle("d-none");
    document.querySelector(".lap").muted = true;
});
