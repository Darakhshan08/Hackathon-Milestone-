// Get elements for toggling and color mode change
const toggleSkillsButton = document.getElementById('toggle-skills')!;
const skillsSection = document.getElementById('skills')!;
const toggleColorModeButton = document.getElementById('toggle-color-mode')!;
const bodyElement = document.body;

// Toggle Skills Section visibility and button text
toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});

// Toggle between Light and Dark Mode
toggleColorModeButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
});
