// JavaScript for scroll indicator animation (already handled by CSS animation)
// JavaScript for hover effects (already handled by CSS :hover)

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Search icon functionality
  const searchIcon = document.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.addEventListener('click', () => {
      alert('Search functionality coming soon!');
      // In a real application, you'd toggle a search overlay here
    });
  }

  // Dark Mode Toggle Logic
  const themeToggleButton = document.querySelector('.theme-toggle-button');
  const body = document.body;
  
  if (themeToggleButton) {
    const themeIcon = themeToggleButton.querySelector('i');

    // Function to set theme
    function setTheme(isDarkMode) {
      if (isDarkMode) {
        body.classList.add('dark-mode');
        if (themeIcon) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        }
        themeToggleButton.setAttribute('aria-label', 'Switch to light mode');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        if (themeIcon) {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
        themeToggleButton.setAttribute('aria-label', 'Switch to dark mode');
        localStorage.setItem('theme', 'light');
      }
    }

    // Check for saved theme preference or system preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(true);
    } else {
      setTheme(false);
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
      setTheme(!body.classList.contains('dark-mode'));
    });
  }

  // Smooth scroll for internal navigation links and buttons
  document.querySelectorAll('nav.nav-links a, .cta-button, .scroll-indicator').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return; // Handle '#' or empty href
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

}); // End DOMContentLoaded