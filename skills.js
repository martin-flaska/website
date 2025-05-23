/**
 * Skills Configuration File
 *
 * This file contains all the skills and technologies to be displayed
 * in the Skills section of the portfolio website.
 *
 * HOW TO EDIT:
 * 1. To add a new skill: Add a new object to the appropriate category's skills array
 * 2. To add a new category: Add a new object to the skillCategories array
 * 3. To remove a skill: Delete the object from the skills array
 * 4. To change skill order: Reorder the objects in the array
 *
 * SKILL OBJECT STRUCTURE:
 * {
 *   id: "unique-identifier",        // Unique ID for the skill
 *   name: "Display Name",           // Name shown to users
 *   icon: "fas fa-icon-name"        // FontAwesome icon class
 * }
 *
 * ICON REFERENCE:
 * Icons use FontAwesome classes. Find icons at: https://fontawesome.com/icons
 * Examples: "fab fa-react", "fas fa-code", "fab fa-python"
 */

// Array of skill categories with their associated skills
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

/**
 * Renders the skills section with tabbed interface
 *
 * This function:
 * 1. Creates tab buttons for each skill category
 * 2. Creates content panels with skill tags for each category
 * 3. Sets up click handlers for tab switching
 * 4. Shows the first category by default
 *
 * CUSTOMIZATION:
 * - To change the default active tab, modify the index check in the forEach loop
 * - To change tab styling, update the className assignments
 * - To change skill tag appearance, modify the skillTag.className
 */
function renderSkills() {
  // Get DOM elements - these IDs must exist in the HTML
  const skillsContainer = document.getElementById("skills-container")
  const skillsTabs = document.getElementById("skills-tabs")
  const skillsContent = document.getElementById("skills-content")

  // Error handling - ensure all required elements exist
  if (!skillsContainer || !skillsTabs || !skillsContent) {
    console.error("Skills containers not found - check HTML for required IDs")
    return
  }

  // Clear existing content to prevent duplication
  skillsTabs.innerHTML = ""
  skillsContent.innerHTML = ""

  // Generate tabs and content for each skill category
  skillCategories.forEach((category, index) => {
    // CREATE TAB BUTTON
    const tab = document.createElement("button")

    // Set tab styling - first tab is active by default
    tab.className = `px-4 py-2 text-sm font-medium ${
      index === 0
        ? "border-b-2 border-black dark:border-white" // Active tab styling
        : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white" // Inactive tab styling
    }`

    tab.textContent = category.name
    tab.dataset.tab = category.id // Store category ID for tab switching
    skillsTabs.appendChild(tab)

    // CREATE CONTENT PANEL
    const panel = document.createElement("div")

    // Set panel styling - first panel is visible by default
    panel.className = `${index === 0 ? "" : "hidden"} flex flex-wrap gap-2`
    panel.dataset.panel = category.id // Store category ID for panel switching

    // CREATE SKILL TAGS
    category.skills.forEach((skill) => {
      const skillTag = document.createElement("div")

      // Style skill tags as compact pills with icons
      skillTag.className =
        "flex items-center bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded-md text-sm"

      // Add icon and skill name
      skillTag.innerHTML = `
        <i class="${skill.icon} mr-2 text-xs"></i>
        ${skill.name}
      `

      panel.appendChild(skillTag)
    })

    skillsContent.appendChild(panel)
  })

  // SET UP TAB SWITCHING FUNCTIONALITY
  const tabs = skillsTabs.querySelectorAll("button")

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // UPDATE TAB STYLES
      // Reset all tabs to inactive state
      tabs.forEach((t) => {
        t.className =
          "px-4 py-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
      })

      // Set clicked tab to active state
      tab.className = "px-4 py-2 text-sm font-medium border-b-2 border-black dark:border-white"

      // UPDATE PANEL VISIBILITY
      // Hide all panels
      const panels = skillsContent.querySelectorAll("div[data-panel]")
      panels.forEach((panel) => {
        panel.classList.add("hidden")
      })

      // Show the selected panel
      const selectedPanel = skillsContent.querySelector(`div[data-panel="${tab.dataset.tab}"]`)
      if (selectedPanel) {
        selectedPanel.classList.remove("hidden")
      }
    })
  })
}

// Export functions and data for use in other modules
export { skillCategories, renderSkills }