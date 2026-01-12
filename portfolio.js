// Portfolio Page JavaScript
// Handles category tabs and pattern background toggles

document.addEventListener('DOMContentLoaded', function() {
    
    // =======================================
    // CATEGORY TABS
    // =======================================
    
    const categoryTabs = document.querySelectorAll('.category-tab');
    const categoryContents = document.querySelectorAll('.asset-category');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            tab.classList.add('active');
            
            // Hide all category content
            categoryContents.forEach(content => content.classList.remove('active'));
            
            // Show the matching category content
            const categoryId = `category-${tab.dataset.category}`;
            const targetContent = document.getElementById(categoryId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // =======================================
    // PATTERN PREVIEWS
    // =======================================
    
    const patternPreviews = document.querySelectorAll('.pattern-preview');
    
    patternPreviews.forEach(preview => {
        const patternUrl = preview.dataset.pattern;
        const scale = preview.dataset.scale || 256;
        
        if (patternUrl) {
            preview.style.backgroundImage = `url('${patternUrl}')`;
            preview.style.backgroundSize = `${scale}px ${scale}px`;
        }
    });
    
    // =======================================
    // BACKGROUND TOGGLE BUTTONS
    // =======================================
    
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the parent pack-preview
            const packPreview = button.closest('.pack-preview');
            const patternPreview = packPreview.querySelector('.pattern-preview');
            const toggleGroup = button.closest('.background-toggle');
            
            // Remove active from siblings
            toggleGroup.querySelectorAll('.toggle-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active to clicked button
            button.classList.add('active');
            
            // Toggle dark/light background
            if (button.dataset.bg === 'dark') {
                patternPreview.classList.add('dark-bg');
            } else {
                patternPreview.classList.remove('dark-bg');
            }
        });
    });
    
    // =======================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // =======================================
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
});