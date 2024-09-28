function highlightActiveLink() {
  const navLinks = document.querySelectorAll("[data-navLink]");
  navLinks.forEach((link) => {
    link.classList.remove("border-opacity-100", "font-bold"); // Reset all
    if (link.getAttribute("href") === window.location.pathname) {
      link.classList.add("border-opacity-100", "font-bold");  // Highlight the current
    }
  });
}

// Run initially on page load
document.addEventListener("DOMContentLoaded", highlightActiveLink);

// Observe route changes (depends on the router Astro is using, if any)
document.addEventListener('astro:page-load', highlightActiveLink);
