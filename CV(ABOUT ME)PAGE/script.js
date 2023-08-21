// script.js
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    sections.forEach((section) => {
      section.classList.remove('active');
    });
    sections[index].classList.add('active');
  });
});
