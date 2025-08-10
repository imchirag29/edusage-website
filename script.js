// Menu Toggle
const menu = document.getElementById('menu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', () => {
  menu.classList.add('open');
});
closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-title", { y: 50, opacity: 0, duration: 1 });
gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 1, delay: 0.3 });
gsap.from(".cta", { scale: 0.8, opacity: 0, duration: 0.8, delay: 0.6 });

document.querySelectorAll("[data-gsap]").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  });
});

// Smooth scroll to section
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    menu.classList.remove('open');
  });
});
