const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const introText = document.querySelector('.intro-text');

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    // Hide the intro text
    introText.style.display = 'none';

    // Hide all sections and remove the 'active' class
    sections.forEach((section) => {
      section.style.opacity = 0; // Hide with fade effect
      section.classList.remove('active');
    });

    // Show the clicked section's content with fade-in effect
    sections[index].style.opacity = 1;
    sections[index].classList.add('active');
  });
});
