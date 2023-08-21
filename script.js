// script.js
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        sections.forEach((section) => {
            section.classList.remove('active');
        });
        sections[index].classList.add('active');

        // Update the content in the respective section
        const sectionId = sections[index].getAttribute('id');
        const contentDiv = document.getElementById(`${sectionId}-content`);
        if (contentDiv) {
            contentDiv.innerHTML = sectionContent[sectionId];
        }
    });
});

// Object containing the content for each section
const sectionContent = {
    about: "<p>I'm Arshaan Mirza, a passionate student at Bay View Academy. I've been a prefect and now serve as a house captain. I excel academically and have secured the top position from grade 7 to 10.</p>",
    achievements: "<p>• Top ten student (Grade 7-9)<br>• First position in both terms of Grade 10<br>• Two A stars in O1 level result</p>",
    skills: "<p>• Proficient in HTML, CSS, and learning to be a software engineer<br>• Captain of the cricket team, rowing, football, and basketball player<br>• Learning Mandarin and Sindhi languages<br>• Fluent in English and Urdu</p>"
};
