/* ======================================================
   Guillian Roy D. Laud Portfolio
   Main JavaScript
====================================================== */

/* ===========================
   DARK MODE
=========================== */

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");
        themeButton.innerHTML = '<i class="fas fa-sun"></i>';

    }

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeButton.innerHTML =
                '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            themeButton.innerHTML =
                '<i class="fas fa-moon"></i>';

        }

    });

}

/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   HEADER SHADOW
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 12px 25px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* ===========================
   SCROLL REVEAL
=========================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/* ===========================
   TYPING EFFECT
=========================== */

const typingTarget = document.querySelector(".hero-text h2");

const words = [

    "IT Support Specialist",

    "Technical Support",

    "MIS Officer",

    "Network Technician"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

function typingEffect() {

    if (!typingTarget) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingTarget.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;

        }

    } else {

        typingTarget.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );

}

typingEffect();

/* ===========================
   COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter");

function runCounter(counter) {

    const target = Number(counter.dataset.target);

    let count = 0;

    const speed = target / 80;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    };

    update();

}

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => {

    observer.observe(counter);

});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ===========================
   SCROLL TO TOP BUTTON
=========================== */

const topButton = document.createElement("button");

topButton.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topButton.className = "scrollTop";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
   LOADING ANIMATION
=========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ===========================
   CURRENT YEAR
=========================== */

const year = document.querySelector(".year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}

/* ======================================================
   END OF SCRIPT
====================================================== */
