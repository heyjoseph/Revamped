// Theme management - dark/light mode toggle
const ThemeManager = {
    init() {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        
        // Add theme toggle button to navigation
        this.addThemeToggle();
    },
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle button icon
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        }
    },
    
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    },
    
    addThemeToggle() {
        const navbar = document.querySelector('#navbar .max-w-7xl');
        if (navbar) {
            const toggleBtn = document.createElement('button');
            toggleBtn.id = 'theme-toggle';
            toggleBtn.className = 'text-gray-300 hover:text-white transition-colors duration-200';
            toggleBtn.innerHTML = '<i data-lucide="sun" class="w-5 h-5"></i>';
            toggleBtn.addEventListener('click', () => this.toggleTheme());
            
            // Insert before mobile menu button
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            if (mobileMenuBtn) {
                navbar.insertBefore(toggleBtn, mobileMenuBtn);
            } else {
                navbar.appendChild(toggleBtn);
            }
            
            // Initialize icon
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }
};

// Initialize theme manager on DOM load
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
});
