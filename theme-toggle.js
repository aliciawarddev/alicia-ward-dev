// ===== GET ELEMENTS FROM HTML =====
const themeToggle = document.getElementById('theme-toggle');

// ===== CHECK FOR SAVED THEME ON PAGE LOAD =====
// Look in localStorage for saved preference, default to 'light' if none exists
const savedTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme to the HTML element
document.documentElement.setAttribute('data-theme', savedTheme);

// ===== TOGGLE THEME WHEN BUTTON IS CLICKED =====
themeToggle.addEventListener('click', () => {
    
    // Get current theme from HTML element
    const currentTheme = document.documentElement.getAttribute('data-theme');

    // Switch to opposite theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply new theme to HTML element (triggers CSS changes including icon swap)
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save the new theme preference to localStorage (persists after page reload)
    localStorage.setItem('theme', newTheme);
});