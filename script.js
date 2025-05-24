/**
 * Main JavaScript File for Portfolio Website
 *
 * This file handles:
 * - Dynamic content loading (skills and projects)
 * - Dark/light theme switching
 * - Mobile menu functionality
 * - Keyboard shortcuts
 *
 * DEPENDENCIES:
 * - skills.js: Contains skills data and rendering function
 * - projects.js: Contains projects data and rendering function
 *
 * BROWSER COMPATIBILITY:
 * - Requires ES6 module support (modern browsers)
 * - Uses localStorage for theme persistence
 * - Uses CSS custom properties for theming
 */

// Import required functions from other modules
import { renderSkills } from "./skills.js"
import { renderProjects } from "./projects.js"

/**
 * Main initialization function
 * Runs when the DOM is fully loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded")

  // ===== DYNAMIC CONTENT RENDERING =====
  // Load skills and projects from their respective JavaScript files
  try {
    renderSkills()
    renderProjects()
  } catch (error) {
    console.error("Error rendering dynamic content:", error)
  }

  // ===== THEME SWITCHING FUNCTIONALITY =====

  // Get theme toggle button and HTML element
  const themeToggle = document.getElementById("theme-toggle")
  const htmlElement = document.documentElement

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme")
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  // Apply initial theme
  // Priority: saved preference > system preference > light mode (default)
  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    htmlElement.classList.add("dark")
  }

  // Theme toggle click handler
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      // Toggle dark class on HTML element
      htmlElement.classList.toggle("dark")

      // Save preference to localStorage
      const currentTheme = htmlElement.classList.contains("dark") ? "dark" : "light"
      localStorage.setItem("theme", currentTheme)

      // Optional: Log theme change for debugging
      console.log(`Theme switched to: ${currentTheme}`)
    })
  } else {
    console.warn("Theme toggle button not found")
  }

  // ===== MOBILE MENU FUNCTIONALITY =====

  // Get mobile menu elements
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  // Mobile menu toggle handler
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      // Toggle menu visibility
      mobileMenu.classList.toggle("hidden")

      // Optional: Update button icon based on menu state
      const isOpen = !mobileMenu.classList.contains("hidden")
      console.log(`Mobile menu ${isOpen ? "opened" : "closed"}`)
    })

    // Close mobile menu when clicking navigation links
    const mobileLinks = mobileMenu.querySelectorAll("a")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Hide menu when user clicks a navigation link
        mobileMenu.classList.add("hidden")
      })
    })

    // Close mobile menu when clicking outside (optional enhancement)
    document.addEventListener("click", (event) => {
      // Check if click is outside menu and button
      if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        mobileMenu.classList.add("hidden")
      }
    })
  } else {
    console.warn("Mobile menu elements not found")
  }

  // ===== KEYBOARD SHORTCUTS =====

  /**
   * Command/Ctrl + K shortcut for future command menu
   * Currently just logs to console, but can be extended
   * to show a search/navigation overlay
   */
  document.addEventListener("keydown", (event) => {
    // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault() // Prevent browser's default behavior

      // TODO: Implement command menu functionality
      console.log("Command menu triggered (not yet implemented)")

      // Future implementation could show a search overlay:
      // showCommandMenu()
    }

    // ESC key to close mobile menu
    if (event.key === "Escape") {
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden")
      }
    }
  })

  // ===== SMOOTH SCROLLING ENHANCEMENTS =====

  /**
   * Enhanced smooth scrolling for navigation links
   * Accounts for fixed header height
   */
  const navigationLinks = document.querySelectorAll('a[href^="#"]')

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href")

      // Skip if it's just "#" (placeholder links)
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        event.preventDefault()

        // Calculate offset for fixed header (64px)
        const headerOffset = 80
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        // Smooth scroll to target
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // ===== PERFORMANCE MONITORING =====

  /**
   * Optional: Log page load performance
   * Useful for debugging and optimization
   */
  window.addEventListener("load", () => {
    // Log when all resources have finished loading
    console.log("All resources loaded")

    // Optional: Performance timing (for development)
    if (performance && performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      console.log(`Page load time: ${loadTime}ms`)
    }
  })

  // ===== ERROR HANDLING =====

  /**
   * Global error handler for JavaScript errors
   * Helps with debugging in production
   */
  window.addEventListener("error", (event) => {
    console.error("JavaScript error:", event.error)
    // In production, you might want to send this to an error tracking service
  })

  // ===== ACCESSIBILITY ENHANCEMENTS =====

  /**
   * Focus management for better keyboard navigation
   * Ensures focus is visible and logical
   */

  // Add focus-visible polyfill behavior for older browsers
  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      document.body.classList.add("keyboard-navigation")
    }
  })

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-navigation")
  })

  // ===== FUTURE ENHANCEMENTS =====

  /**
   * Placeholder functions for future features
   * Uncomment and implement as needed
   */

  // function showCommandMenu() {
  //   // Implementation for command/search menu
  // }

  // function initScrollAnimations() {
  //   // Implementation for scroll-triggered animations
  // }

  // function initContactForm() {
  //   // Implementation for contact form handling
  // }

  // function initAnalytics() {
  //   // Implementation for analytics tracking
  // }
})

/**
 * MAINTENANCE NOTES:
 *
 * 1. When adding new sections, update the navigation links in HTML
 * 2. When adding new interactive elements, ensure they work with keyboard navigation
 * 3. Test theme switching thoroughly when making CSS changes
 * 4. Keep the mobile menu in sync with the desktop navigation
 * 5. Update this file's comments when adding new functionality
 *
 * DEBUGGING TIPS:
 *
 * 1. Check browser console for error messages
 * 2. Verify that all required HTML IDs exist
 * 3. Ensure skills.js and projects.js are properly formatted
 * 4. Test on different screen sizes and devices
 * 5. Validate that all external dependencies (FontAwesome, Tailwind) are loading
 */