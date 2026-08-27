// Navigation configuration - comprehensive menu structure with icons
const navItems = [
    { name: 'Home', url: 'index.html', icon: 'home' },
    { name: 'Services', url: 'services.html', icon: 'briefcase', dropdown: [
        { name: 'SharePoint Consulting', url: 'sharepoint-consulting.html' },
        { name: 'Power Platform', url: 'power-platform.html' },
        { name: 'Microsoft Teams', url: 'microsoft-teams.html' },
        { name: 'Migration Services', url: 'sharepoint-migration.html' },
        { name: 'All Services', url: 'services.html' }
    ]},
    { name: 'Industries', url: 'industries.html', icon: 'building-2', dropdown: [
        { name: 'Healthcare', url: 'healthcare.html' },
        { name: 'Finance', url: 'finance.html' },
        { name: 'Manufacturing', url: 'manufacturing.html' },
        { name: 'Government', url: 'government.html' },
        { name: 'Education', url: 'education.html' }
    ]},
    { name: 'Articles', url: 'articles/azure-integration-patterns.html', icon: 'file-text', dropdown: [
        { name: 'Azure Integration', url: 'articles/azure-integration-patterns.html' },
        { name: 'Copilot Readiness', url: 'articles/copilot-readiness-checklist.html' },
        { name: 'Power Platform', url: 'articles/power-platform-automation-use-cases.html' },
        { name: 'SharePoint Security', url: 'articles/sharepoint-security-best-practices.html' },
        { name: 'All Articles (105+)', url: 'articles/azure-integration-patterns.html' }
    ]},
    { name: 'Case Studies', url: 'case-studies.html', icon: 'folder-open', dropdown: [
        { name: 'Healthcare', url: 'case-studies/healthcare-sharepoint-migration.html' },
        { name: 'Finance', url: 'case-studies/finance-m365-governance.html' },
        { name: 'Manufacturing', url: 'case-studies/manufacturing-power-platform.html' },
        { name: 'Government', url: 'case-studies/government-copilot-implementation.html' },
        { name: 'All Case Studies (20+)', url: 'case-studies.html' }
    ]},
    { name: 'Blog', url: 'blog.html', icon: 'rss', dropdown: [
        { name: 'Latest Posts', url: 'blog.html' },
        { name: 'Copilot Guide', url: 'blog/copilot-readiness-guide.html' },
        { name: 'Graph API', url: 'blog/graph-api-integration.html' },
        { name: 'SPFX Mastery', url: 'blog/mastering-spfx-2026.html' }
    ]},
    { name: 'Resources', url: 'resources.html', icon: 'library', dropdown: [
        { name: 'Guides', url: 'resources.html' },
        { name: 'Copilot Roadmap', url: 'articles/copilot-readiness-roadmap.html' },
        { name: 'M365 Governance', url: 'articles/m365-governance-framework.html' },
        { name: 'Zero-Downtime Migration', url: 'articles/zero-downtime-migration-guide.html' }
    ]},
    { name: 'About', url: 'about.html', icon: 'user' },
    { name: 'Contact', url: 'contact.html', icon: 'mail' }
];

// Initialize navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.getElementById('nav-links');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    // Build desktop navigation with dropdowns
    if (navLinks) {
        navItems.forEach(item => {
            if (item.dropdown) {
                // Create dropdown container
                const dropdownContainer = document.createElement('div');
                dropdownContainer.className = 'relative group';
                
                const link = document.createElement('a');
                link.href = item.url;
                link.className = 'text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2';
                link.innerHTML = `<i data-lucide="${item.icon}" class="w-4 h-4"></i> ${item.name} <i data-lucide="chevron-down" class="w-4 h-4"></i>`;
                
                const dropdownMenu = document.createElement('div');
                dropdownMenu.className = 'absolute top-full left-0 mt-2 w-56 bg-[#0D121E] border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50';
                
                item.dropdown.forEach(subItem => {
                    const subLink = document.createElement('a');
                    subLink.href = subItem.url;
                    subLink.textContent = subItem.name;
                    subLink.className = 'block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#0078D4]/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg';
                    dropdownMenu.appendChild(subLink);
                });
                
                dropdownContainer.appendChild(link);
                dropdownContainer.appendChild(dropdownMenu);
                navLinks.appendChild(dropdownContainer);
            } else {
                const link = document.createElement('a');
                link.href = item.url;
                link.className = 'text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2';
                link.innerHTML = `<i data-lucide="${item.icon}" class="w-4 h-4"></i> ${item.name}`;
                navLinks.appendChild(link);
            }
        });
    }
    
    // Build mobile navigation
    if (mobileMenu) {
        navItems.forEach(item => {
            if (item.dropdown) {
                const container = document.createElement('div');
                container.className = 'mb-4';
                
                const link = document.createElement('a');
                link.href = item.url;
                link.className = 'block py-2 text-gray-300 hover:text-white transition-colors duration-200 font-semibold flex items-center gap-2';
                link.innerHTML = `<i data-lucide="${item.icon}" class="w-4 h-4"></i> ${item.name}`;
                container.appendChild(link);
                
                item.dropdown.forEach(subItem => {
                    const subLink = document.createElement('a');
                    subLink.href = subItem.url;
                    subLink.textContent = subItem.name;
                    subLink.className = 'block py-2 pl-4 text-gray-400 hover:text-white transition-colors duration-200';
                    container.appendChild(subLink);
                });
                
                mobileMenu.appendChild(container);
            } else {
                const link = document.createElement('a');
                link.href = item.url;
                link.className = 'block py-2 text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2';
                link.innerHTML = `<i data-lucide="${item.icon}" class="w-4 h-4"></i> ${item.name}`;
                mobileMenu.appendChild(link);
            }
        });
    }
    
    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Highlight current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#nav-links a, #mobile-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('text-[#0078D4]');
            link.classList.remove('text-gray-300');
        }
    });
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
