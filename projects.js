// Array of projects with their details
const projects = [
  {
    id: "nuvo-player",
    title: "Nuvo Player",
    description:
      "A distributed multiroom wireless audio system based on the Linux platform, integrated with various music services and IoT/KNX network.",
    role: "Led development of music services and IoT/KNX integration.",
    outcome: "The product achieved significant success in the global market.",
    icon: "fas fa-music",
    tags: ["Linux", "C++", "IoT", "KNX", "Music Services"],
    link: "#",
    featured: true,
  },
  {
    id: "remote-monitoring",
    title: "Remote Monitoring System",
    description: "An intercom product solution used in a safety-critical environment (refinery).",
    role: "Developed embedded Linux components (C++, Yocto), integrating SIP client, various peripheral monitors, BT LE, RFID and battery chargers.",
    outcome: "The product was successfully deployed and is currently being further improved with new features.",
    icon: "fas fa-industry",
    tags: ["Embedded Linux", "C++", "Yocto", "BT LE", "RFID"],
    link: "#",
    featured: false,
  },
  {
    id: "power-grid-scada",
    title: "Remote Power Grid SCADA Systems",
    description:
      "QNX-based solutions designed for controlling and monitoring power grids, as well as transmitting NF-modulated signals over high-voltage power lines.",
    role: "Improved the team's software development cycle by implementing a CI/CD system.",
    outcome: "Successfully deployed across most electrical distribution networks in Slovakia and the Czech Republic.",
    icon: "fas fa-bolt",
    tags: ["QNX", "SCADA", "CI/CD", "Power Grid"],
    link: "#",
    featured: true,
  },
]

// Function to render projects to the DOM
function renderProjects() {
  const projectsContainer = document.getElementById("projects-container")

  if (!projectsContainer) {
    console.error("Projects container not found")
    return
  }

  // Clear the container
  projectsContainer.innerHTML = ""

  // Add each project to the container
  projects.forEach((project) => {
    const projectElement = document.createElement("div")

    // Add featured class if project is featured
    projectElement.className = `border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors ${
      project.featured ? "col-span-full md:col-span-2 lg:col-span-2" : ""
    }`

    // Create tags HTML
    const tagsHTML = project.tags
      .map(
        (tag) =>
          `<span class="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs px-2 py-1 rounded-md">${tag}</span>`,
      )
      .join("")

    projectElement.innerHTML = `
      <div class="h-40 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
        <i class="${project.icon} text-2xl text-zinc-400"></i>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-medium mb-2">${project.title}</h3>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm mb-3">${project.description}</p>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm mb-3"><strong>Role:</strong> ${project.role}</p>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm mb-4"><strong>Outcome:</strong> ${project.outcome}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${tagsHTML}
        </div>
        <a href="${project.link}" class="text-sm font-medium hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors">
          View Project →
        </a>
      </div>
    `

    projectsContainer.appendChild(projectElement)
  })
}

// Export the projects and render function
export { projects, renderProjects }