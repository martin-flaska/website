document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded")

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle")
  const htmlElement = document.documentElement

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme")
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    htmlElement.classList.add("dark")
  }

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    htmlElement.classList.toggle("dark")
    const currentTheme = htmlElement.classList.contains("dark") ? "dark" : "light"
    localStorage.setItem("theme", currentTheme)
  })

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll("a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
    })
  })
})