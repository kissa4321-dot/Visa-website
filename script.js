// 🔥 AOS INIT
AOS.init({
  duration: 1000,
  once: true
});

// 🔥 MOBILE MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});


// 🔥 TYPEWRITER EFFECT
const textArray = [
  "Start Your Journey Abroad ✈️",
  "Study, Work & Settle Globally 🌍",
  "Visa Made Simple & Fast 🚀"
];

let typingText = document.getElementById("typingText");
let index = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[index].length) {
    typingText.innerHTML += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 50);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.innerHTML = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 30);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(typeEffect, 500);
});


// 🔥 COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;

      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
      observer.unobserve(counter);
    }
  });
});

counters.forEach(counter => observer.observe(counter));


// 🔥 SCROLL PROGRESS BAR
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = (scrollTop / height) * 100;

  document.getElementById("progressBar").style.width = progress + "%";
});


// 🔥 VANILLA TILT (3D EFFECT)
VanillaTilt.init(document.querySelectorAll(".card, .service-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});


// 🔥 ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
const getStartedBtn = document.querySelector(".btn");
const popup = document.getElementById("popup");

getStartedBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

function closePopup() {
  popup.style.display = "none";
}