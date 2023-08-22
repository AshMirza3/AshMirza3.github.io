// script.js
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        sections.forEach((section) => {
            section.style.display = 'none';
        });
        sections[index].style.display = 'block';
    });
});
