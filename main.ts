// Get references to the DOM elements
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLUListElement;

// Function to toggle visibility of the skills section
const toggleSkillsVisibility = () => {
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "flex";
  } else {
    skillsSection.style.display = "none";
  }
};

// Add event listener to the button
toggleSkillsBtn.addEventListener("click", toggleSkillsVisibility);
