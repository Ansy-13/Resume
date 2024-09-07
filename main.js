// Get references to the DOM elements
var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
var skillsSection = document.getElementById("skills");
// Function to toggle visibility of the skills section
var toggleSkillsVisibility = function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "flex";
    }
    else {
        skillsSection.style.display = "none";
    }
};
// Add event listener to the button
toggleSkillsBtn.addEventListener("click", toggleSkillsVisibility);
