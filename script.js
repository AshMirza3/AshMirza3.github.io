const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const introText = document.querySelector('.intro-text');

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    // Hide the intro text
    introText.style.display = 'none';

    // Show the clicked section's content and hide other sections
    sections.forEach((section, sectionIndex) => {
      if (sectionIndex === index) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
});
