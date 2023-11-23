let s = 0;

function show() {
    const elements = document.getElementsByClassName("hide");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    s++;
    if (s > elements.length) {
        s = 1;
    }
    elements[s - 1].style.display = "block";
    setTimeout(show, 1200);
}

show();

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
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
            1200: { items: 4 },
        },
    });
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