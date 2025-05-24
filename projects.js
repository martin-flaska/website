/**
 * Projects Configuration File
 *
 * This file contains all the projects to be displayed in the Projects section
 * of the portfolio website.
 *
 * HOW TO EDIT:
 * 1. To add a new project: Add a new object to the projects array
 * 2. To remove a project: Delete the object from the projects array
 * 3. To change project order: Reorder the objects in the array
 * 4. To feature a project: Set featured: true (featured projects are larger)
 *
 * PROJECT OBJECT STRUCTURE:
 * {
 *   id: "unique-identifier",           // Unique ID for the project
 *   title: "Project Title",            // Project name shown to users
 *   description: "Brief description",  // Short project description
 *   role: "Your role description",     // Your specific role in the project
 *   outcome: "Project outcome",        // Results or impact of the project
 *   icon: "fas fa-icon-name",          // FontAwesome icon class
 *   tags: ["Tag1", "Tag2"],            // Array of technology tags
 *   link: "https://...",               // Link to project (use "#" for placeholder)
 *   featured: true/false               // Whether to highlight this project
 * }
 *
 * ICON REFERENCE:
 * Icons use FontAwesome classes. Find icons at: https://fontawesome.com/icons
 * Examples: "fas fa-music", "fas fa-industry", "fas fa-bolt"
 */

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
    link: "https://www.legrand.us/nuvo/player-portfolio",
    featured: true, // This project will be displayed prominently
  },
  {
    id: "remote-monitoring",
    title: "Remote Monitoring System",
    description: "An intercom product solution used in a safety-critical environment (refinery).",
    role: "Developed embedded Linux components (C++, Yocto), integrating SIP client, various peripheral monitors, BT LE, RFID and battery chargers.",
    outcome: "The product was successfully deployed and is currently being further improved with new features.",
    icon: "fas fa-industry",
    tags: ["Embedded Linux", "C++", "Yocto", "BT LE", "RFID"],
    link: "#", // TODO: Replace with actual project link
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
    link: "#", // TODO: Replace with actual project link
    featured: true, // This project will be displayed prominently
  },
]

/**
 * Renders the projects section
 *
 * This function:
 * 1. Creates project cards for each project in the array
 * 2. Applies special styling to featured projects (larger cards)
 * 3. Generates technology tags for each project
 * 4. Sets up the grid layout that adapts to featured projects
 *
 * FEATURED PROJECTS:
 * - Featured projects span multiple columns on larger screens
 * - Set featured: true in the project object to enable this
 *
 * CUSTOMIZATION:
 * - To change card styling, modify the projectElement.className
 * - To change tag appearance, update the tagsHTML generation
 * - To modify the grid layout, update the projects-container classes in HTML
 */
function renderProjects() {
  // Get the projects container element
  const projectsContainer = document.getElementById("projects-container")

  // Error handling - ensure the container exists
  if (!projectsContainer) {
    console.error("Projects container not found - check HTML for 'projects-container' ID")
    return
  }

  // Clear existing content to prevent duplication
  projectsContainer.innerHTML = ""

  // Generate a card for each project
  projects.forEach((project) => {
    // CREATE PROJECT CARD ELEMENT
    const projectElement = document.createElement("div")

    // Apply styling based on whether the project is featured
    // Featured projects span multiple columns on larger screens
    projectElement.className = `border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors ${
      project.featured ? "col-span-full md:col-span-2 lg:col-span-2" : ""
    }`

    // GENERATE TECHNOLOGY TAGS
    // Convert the tags array into HTML elements
    const tagsHTML = project.tags
      .map(
        (tag) =>
          `<span class="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs px-2 py-1 rounded-md">${tag}</span>`,
      )
      .join("")

    // BUILD PROJECT CARD HTML
    projectElement.innerHTML = `
      <!-- Project Icon/Image Area -->
      <div class="h-40 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
        <i class="${project.icon} text-2xl text-zinc-400"></i>
      </div>
      
      <!-- Project Information -->
      <div class="p-4">
        <!-- Project Title -->
        <h3 class="text-lg font-medium mb-2">${project.title}</h3>
        
        <!-- Project Description -->
        <p class="text-zinc-600 dark:text-zinc-400 text-sm mb-3">${project.description}</p>
        
        <!-- Your Role in the Project -->
        <p class="text-zinc-600 dark:text-zinc-400 text-sm mb-3"><strong>Role:</strong> ${project.role}</p>
        
        <!-- Project Outcome/Results -->
        <p class="text-zinc-600 dark:text-zinc-400 text-sm mb-4"><strong>Outcome:</strong> ${project.outcome}</p>
        
        <!-- Technology Tags -->
        <div class="flex flex-wrap gap-2 mb-4">
          ${tagsHTML}
        </div>
        
        <!-- Project Link -->
        <a href="${project.link}" class="text-sm font-medium hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors">
          View Project →
        </a>
      </div>
    `

    // Add the completed card to the container
    projectsContainer.appendChild(projectElement)
  })
}

// Export functions and data for use in other modules
export { projects, renderProjects }