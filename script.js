/*=========================================
Velocity Motors
Main JavaScript
=========================================*/

// ============================
// Mobile Menu
// ============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
}

// ============================
// Sticky Navbar
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.9)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});

// ============================
// Smooth Scrolling
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ============================
// Back To Top Button
// ============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ============================
// Counter Animation
// ============================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 150;

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounters();

            observer.disconnect();

        }

    });

});

const statsSection = document.querySelector(".stats");

if (statsSection) {

    observer.observe(statsSection);

}