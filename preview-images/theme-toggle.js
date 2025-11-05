// ===== GET ELEMENTS FROM HTML =====
const themeToggle = document.getElementById('theme-toggle'); // The toggle button
const sunIcon = document.querySelector('.sun-icon'); // Sun icon element
const moonIcon = document.querySelector('.moon-icon'); // Moon icon element

// ===== CHECK FOR SAVED THEME ON PAGE LOAD =====
// Look in localStorage for saved preference, default to 'light' if none exists
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme to the HTML element
document.documentElement.setAttribute('data-theme', currentTheme);

// ===== UPDATE ICON VISIBILITY ON PAGE LOAD =====
// If dark mode is active, show moon and hide sun
if (currentTheme === 'dark') {
    sunIcon.hidden = true;
    moonIcon.hidden = false;
}

// ===== TOGGLE THEME WHEN BUTTON IS CLICKED =====
themeToggle.addEventListener('click', () => {
    
    // Get current theme from HTML element
    const theme = document.documentElement.getAttribute('data-theme');

    // Switch to opposite theme
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // Apply new theme to HTML element (triggers CSS variable changes)
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save the new theme preference to localStorage (persists after page reload)
    localStorage.setItem('theme', newTheme);

    // ===== SWAP ICON VISIBILITY =====
    sunIcon.hidden = !sunIcon.hidden; // Toggle sun visibility
    moonIcon.hidden = !moonIcon.hidden; // Toggle moon visibility
});

