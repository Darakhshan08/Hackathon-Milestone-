// Get elements for toggling and color mode change
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
var toggleColorModeButton = document.getElementById('toggle-color-mode');
var bodyElement = document.body;
// Toggle Skills Section visibility and button text
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
// Toggle between Light and Dark Mode
toggleColorModeButton.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-mode');
});
