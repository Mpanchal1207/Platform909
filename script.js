/* PLATFORM 909 WEBSITE */


/* OPEN / CLOSED STATUS */

const status = document.getElementById("status");

const now = new Date();

const day = now.getDay();
const hour = now.getHours();
const minute = now.getMinutes();

const time = hour + minute / 60;

let open = false;

switch (day) {

    case 0: // Sunday
        open = time >= 8 && time < 14;
        break;

    case 6: // Saturday
        open = time >= 7 && time < 15;
        break;

    default: // Monday - Friday
        open = time >= 8 && time < 17;
}

status.textContent = open ? "Open Now" : "Closed";
status.style.color = open ? "#7fb57a" : "#ff8d8d";


/* ACTIVE NAVIGATION LINK */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {
            current = section.id;
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* FADE-IN ANIMATION */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".fade").forEach(section => {
    observer.observe(section);
});


/* MENU IMAGE ZOOM */

document.querySelectorAll(".menu-item img").forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});


/* SHRINK NAVBAR ON SCROLL */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        nav.classList.add("small");
    } else {
        nav.classList.remove("small");
    }

});