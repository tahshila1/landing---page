/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(function () {

        preloader.style.opacity = "0";

        setTimeout(function () {
            preloader.style.display = "none";
        }, 500);

    }, 500);

});


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header = document.getElementById("mainHeader");

window.addEventListener("scroll", function () {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingText = document.getElementById("typingText");

const words = [
    "Frontend Developer",
    "Web Designer",
    "UI/UX Designer",
    "Creative Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}

typeEffect();


/* =====================================================
   MOBILE NAVBAR CLOSE
===================================================== */

const navbar = document.getElementById("portfolioNavbar");

const navbarLinks = navbar.querySelectorAll(
    ".nav-link:not(.dropdown-toggle), .dropdown-item"
);

navbarLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const collapse =
            bootstrap.Collapse.getInstance(navbar);

        if (collapse) {
            collapse.hide();
        }

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =====================================================
   PROJECT FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectItems =
    document.querySelectorAll(".project-item");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const filter =
            this.getAttribute("data-filter");

        projectItems.forEach(function (item) {

            const category =
                item.getAttribute("data-category");

            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display = "block";

                setTimeout(function () {
                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";
                }, 50);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(0.8)";

                setTimeout(function () {
                    item.style.display = "none";
                }, 300);

            }

        });

    });

});


/* =====================================================
   ANIMATED COUNTERS
===================================================== */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats-row");

    if (!statsSection) return;

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(function (counter) {

            const target =
                Number(counter.getAttribute("data-target"));

            let count = 0;

            const increment =
                Math.ceil(target / 50);

            const timer =
                setInterval(function () {

                    count += increment;

                    if (count >= target) {

                        count = target;

                        clearInterval(timer);

                    }

                    counter.textContent =
                        count + "+";

                }, 30);

        });

    }

}

window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


/* =====================================================
   SKILL BAR ANIMATION
===================================================== */

let skillsStarted = false;

function animateSkills() {

    if (skillsStarted) return;

    const skillsSection =
        document.querySelector(".skills-section");

    const sectionTop =
        skillsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        skillsStarted = true;

        const progressBars =
            document.querySelectorAll(".skill-progress");

        progressBars.forEach(function (bar) {

            const width =
                bar.getAttribute("data-width");

            setTimeout(function () {
                bar.style.width = width;
            }, 200);

        });

    }

}

window.addEventListener(
    "scroll",
    animateSkills
);

animateSkills();


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert(
                "Please fill in all fields."
            );

            return;
        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );


        contactForm.reset();

    }
);


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   DROPDOWN HOVER - DESKTOP
===================================================== */

if (window.innerWidth >= 992) {

    const dropdowns =
        document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {

        dropdown.addEventListener(
            "mouseenter",
            function () {

                const toggle =
                    dropdown.querySelector(".dropdown-toggle");

                const menu =
                    dropdown.querySelector(".dropdown-menu");

                toggle.classList.add("show");
                menu.classList.add("show");

            }
        );


        dropdown.addEventListener(
            "mouseleave",
            function () {

                const toggle =
                    dropdown.querySelector(".dropdown-toggle");

                const menu =
                    dropdown.querySelector(".dropdown-menu");

                toggle.classList.remove("show");
                menu.classList.remove("show");

            }
        );

    });

}