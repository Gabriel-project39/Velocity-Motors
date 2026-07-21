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

/*=========================================
FAQ ACCORDION
=========================================*/

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const icon = question.querySelector("i");

        // Close all other FAQs
        faqQuestions.forEach(item => {

            if(item !== question){

                item.nextElementSibling.style.display = "none";

                const otherIcon = item.querySelector("i");

                otherIcon.classList.remove("fa-minus");
                otherIcon.classList.add("fa-plus");

            }

        });

        // Toggle current FAQ
        if(answer.style.display === "block"){

            answer.style.display = "none";

            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");

        }else{

            answer.style.display = "block";

            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        }

    });

});

/*=========================================
TESTIMONIAL SLIDER
=========================================*/

const testimonials = document.querySelectorAll(".testimonial");

const nextBtn = document.getElementById("next");

const prevBtn = document.getElementById("prev");

let currentSlide = 0;

function showSlide(index){

    testimonials.forEach(slide => {

        slide.classList.remove("active");

    });

    testimonials[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= testimonials.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = testimonials.length - 1;

    }

    showSlide(currentSlide);

}

if(nextBtn){

    nextBtn.addEventListener("click", nextSlide);

}

if(prevBtn){

    prevBtn.addEventListener("click", prevSlide);

}

// Auto Slide Every 5 Seconds
setInterval(nextSlide,5000);

/*=========================================
SCROLL REVEAL
=========================================*/

const revealItems = document.querySelectorAll(

".car-card, .category-card, .service-card, .why-card, .arrival-card, .luxury-card, .stat-box"

);

function revealOnScroll(){

    revealItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop;

        if(window.scrollY >= sectionTop - 150){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active-link");

        }

    });

});

/*=========================================
HERO PARALLAX
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    let scroll = window.pageYOffset;

    if(hero){

        hero.style.backgroundPositionY = scroll * 0.5 + "px";

    }

});

/*=========================================
PAGE LOAD ANIMATION
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*=========================================
IMAGE HOVER EFFECT
=========================================*/

const images = document.querySelectorAll(".car-image img, .arrival-card img, .luxury-card img");

images.forEach(image => {

    image.addEventListener("mousemove", (e) => {

        const rect = image.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        image.style.transform = `
            perspective(1000px)
            rotateY(${rotateY}deg)
            rotateX(${rotateX}deg)
            scale(1.05)
        `;

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});

/*=========================================
NEWSLETTER FORM
=========================================*/

const newsletterForm = document.querySelector(".newsletter form");

if(newsletterForm){

    newsletterForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const email = newsletterForm.querySelector("input").value.trim();

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(email === ""){

            alert("Please enter your email.");

            return;

        }

        if(!email.match(emailPattern)){

            alert("Please enter a valid email address.");

            return;

        }

        alert("🎉 Thank you for subscribing!");

        newsletterForm.reset();

    });

}

/*=========================================
CONTACT FORM
=========================================*/

const contactForm = document.querySelector(".contact-form form");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input=>{

            if(input.hasAttribute("required") && input.value.trim()===""){

                valid = false;

                input.style.border="2px solid crimson";

            }else{

                input.style.border="none";

            }

        });

        if(valid){

            alert("✅ Message sent successfully!");

            contactForm.reset();

        }else{

            alert("Please complete all required fields.");

        }

    });

}

/*=========================================
CURRENT YEAR
=========================================*/

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

/*=========================================
WELCOME MESSAGE
=========================================*/

console.log("%cVelocity Motors","font-size:32px;color:#d4af37;font-weight:bold;");
console.log("%cPremium Automotive Website","font-size:16px;color:white;");
console.log("%cDeveloped with HTML, CSS & JavaScript","color:#999;");