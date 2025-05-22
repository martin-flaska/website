// Array of skills with their details, organized by categories
const skillCategories = [
  {
    id: "languages",
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
    id: "frameworks",
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
    id: "platforms",
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
    id: "tools",
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
    id: "other",
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
    id: "methodologies",
    name: "Methodologies",
    skills: [
      { id: "kanban", name: "Kanban", icon: "fas fa-tasks" },
      { id: "scrum", name: "Scrum", icon: "fas fa-users" },
      { id: "cicd", name: "CI/CD", icon: "fas fa-sync-alt" },
    ],
  },
  {
    id: "music",
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
  const skillsTabs = document.getElementById("skills-tabs")
  const skillsContent = document.getElementById("skills-content")

  if (!skillsContainer || !skillsTabs || !skillsContent) {
    console.error("Skills containers not found")
    return
  }

  // Clear the containers
  skillsTabs.innerHTML = ""
  skillsContent.innerHTML = ""

  // Add tabs for each category
  skillCategories.forEach((category, index) => {
    // Create tab
    const tab = document.createElement("button")
    tab.className = `px-4 py-2 text-sm font-medium ${
      index === 0
        ? "border-b-2 border-black dark:border-white"
        : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
    }`
    tab.textContent = category.name
    tab.dataset.tab = category.id
    skillsTabs.appendChild(tab)

    // Create content panel
    const panel = document.createElement("div")
    panel.className = `${index === 0 ? "" : "hidden"} flex flex-wrap gap-2`
    panel.dataset.panel = category.id

    // Add skills as tags
    category.skills.forEach((skill) => {
      const skillTag = document.createElement("div")
      skillTag.className =
        "flex items-center bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded-md text-sm"
      skillTag.innerHTML = `
        <i class="${skill.icon} mr-2 text-xs"></i>
        ${skill.name}
      `
      panel.appendChild(skillTag)
    })

    skillsContent.appendChild(panel)
  })

  // Add tab switching functionality
  const tabs = skillsTabs.querySelectorAll("button")
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Update tab styles
      tabs.forEach((t) => {
        t.className =
          "px-4 py-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
      })
      tab.className = "px-4 py-2 text-sm font-medium border-b-2 border-black dark:border-white"

      // Show the selected panel
      const panels = skillsContent.querySelectorAll("div[data-panel]")
      panels.forEach((panel) => {
        panel.classList.add("hidden")
      })
      const selectedPanel = skillsContent.querySelector(`div[data-panel="${tab.dataset.tab}"]`)
      if (selectedPanel) {
        selectedPanel.classList.remove("hidden")
      }
    })
  })
}

// Export the skills and render function
export { skillCategories, renderSkills }