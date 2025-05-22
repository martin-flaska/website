// Array of skills with their details, organized by categories
const skillCategories = [
  {
    name: "Languages",
    skills: [
      { id: "c", name: "C", icon: "fas fa-code" },
      { id: "cpp", name: "C++", icon: "fas fa-code" },
      { id: "csharp", name: "C#", icon: "fas fa-code" },
      { id: "python", name: "Python", icon: "fab fa-python" },
      { id: "markdown", name: "Markdown", icon: "fas fa-file-code" },
      { id: "powershell", name: "PowerShell", icon: "fas fa-terminal" },
      { id: "bash", name: "Bash Script", icon: "fas fa-terminal" },
    ],
  },
  {
    name: "Frameworks / Libraries",
    skills: [
      { id: "qt", name: "Qt", icon: "fas fa-window-restore" },
      { id: "stl", name: "STL", icon: "fas fa-cubes" },
      { id: "poco", name: "Poco", icon: "fas fa-cubes" },
      { id: "gtest", name: "Google Test", icon: "fas fa-vial" },
      { id: "qttest", name: "Qt Test", icon: "fas fa-vial" },
    ],
  },
  {
    name: "Platforms",
    skills: [
      { id: "embedded", name: "Embedded Systems", icon: "fas fa-microchip" },
      { id: "linux", name: "Linux", icon: "fab fa-linux" },
      { id: "x86", name: "x86", icon: "fas fa-microchip" },
      { id: "arm", name: "ARM", icon: "fas fa-microchip" },
      { id: "yocto", name: "Yocto", icon: "fas fa-layer-group" },
      { id: "arduino", name: "Arduino", icon: "fab fa-arduino" },
      { id: "raspberrypi", name: "Raspberry Pi", icon: "fab fa-raspberry-pi" },
    ],
  },
  {
    name: "Development Tools",
    skills: [
      { id: "git", name: "Git", icon: "fab fa-git-alt" },
      { id: "github", name: "GitHub", icon: "fab fa-github" },
      { id: "bitbucket", name: "BitBucket", icon: "fab fa-bitbucket" },
      { id: "jenkins", name: "Jenkins", icon: "fab fa-jenkins" },
      { id: "docker", name: "Docker", icon: "fab fa-docker" },
      { id: "jira", name: "Jira", icon: "fab fa-jira" },
      { id: "svn", name: "SVN", icon: "fas fa-code-branch" },
      { id: "cvs", name: "CVS", icon: "fas fa-code-branch" },
      { id: "cmake", name: "CMake", icon: "fas fa-file-code" },
    ],
  },
  {
    name: "Other Technologies",
    skills: [
      { id: "iot", name: "IoT", icon: "fas fa-network-wired" },
      { id: "knx", name: "KNX", icon: "fas fa-home" },
      { id: "matter", name: "Matter", icon: "fas fa-project-diagram" },
      { id: "bt", name: "BT/BLE", icon: "fab fa-bluetooth-b" },
      { id: "can", name: "CAN/CANopen", icon: "fas fa-exchange-alt" },
      { id: "iec", name: "IEC 60870", icon: "fas fa-bolt" },
      { id: "scada", name: "SCADA", icon: "fas fa-industry" },
      { id: "apache", name: "Apache", icon: "fab fa-apache" },
      { id: "gimp", name: "Gimp", icon: "fas fa-paint-brush" },
    ],
  },
  {
    name: "Methodologies",
    skills: [
      { id: "kanban", name: "Kanban", icon: "fas fa-tasks" },
      { id: "scrum", name: "Scrum", icon: "fas fa-users" },
      { id: "cicd", name: "CI/CD", icon: "fas fa-sync-alt" },
    ],
  },
  {
    name: "Music Services",
    skills: [
      { id: "deezer", name: "Deezer", icon: "fas fa-music" },
      { id: "iheart", name: "iHeart", icon: "fas fa-heartbeat" },
      { id: "pandora", name: "Pandora", icon: "fas fa-music" },
      { id: "rhapsody", name: "Rhapsody", icon: "fas fa-music" },
      { id: "siriusxm", name: "SiriusXM", icon: "fas fa-satellite" },
      { id: "tunein", name: "TuneIn", icon: "fas fa-broadcast-tower" },
    ],
  },
]

// Function to render skills to the DOM
function renderSkills() {
  const skillsContainer = document.getElementById("skills-container")

  if (!skillsContainer) {
    console.error("Skills container not found")
    return
  }

  // Clear the container
  skillsContainer.innerHTML = ""

  // Add each category and its skills
  skillCategories.forEach((category) => {
    // Create category heading
    const categoryHeading = document.createElement("h3")
    categoryHeading.className = "col-span-full text-xl font-medium mb-4 mt-8"
    categoryHeading.textContent = category.name
    skillsContainer.appendChild(categoryHeading)

    // Add skills for this category
    category.skills.forEach((skill) => {
      const skillElement = document.createElement("div")
      skillElement.className =
        "border border-zinc-200 dark:border-zinc-800 p-6 rounded-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
      skillElement.innerHTML = `
        <i class="${skill.icon} text-2xl mb-3"></i>
        <h3 class="font-medium">${skill.name}</h3>
      `
      skillsContainer.appendChild(skillElement)
    })
  })
}

// Export the skills and render function
export { skillCategories, renderSkills }