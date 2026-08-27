// Footer configuration
const footerData = {
    company: {
        name: 'Rohit Kumar',
        tagline: 'SharePoint & Power Platform Expert',
        location: 'Delhi, India'
    },
    contact: {
        email: 'roohit@outlook.in',
        phone: '+91 9891848489'
    },
    quickLinks: [
        { name: 'Home', url: 'index.html', icon: 'home' },
        { name: 'Services', url: 'services.html', icon: 'briefcase' },
        { name: 'Articles', url: 'articles/azure-integration-patterns.html', icon: 'file-text' },
        { name: 'Case Studies', url: 'case-studies.html', icon: 'folder-open' },
        { name: 'Blog', url: 'blog.html', icon: 'rss' },
        { name: 'About', url: 'about.html', icon: 'user' },
        { name: 'Contact', url: 'contact.html', icon: 'mail' }
    ],
    services: [
        { name: 'SharePoint Consulting', url: 'sharepoint-consulting.html', icon: 'database' },
        { name: 'Power Platform', url: 'power-platform.html', icon: 'zap' },
        { name: 'Microsoft Teams', url: 'microsoft-teams.html', icon: 'users' },
        { name: 'Migration Services', url: 'sharepoint-migration.html', icon: 'arrow-right-left' }
    ],
    resources: [
        { name: 'Articles (105+)', url: 'articles/azure-integration-patterns.html', icon: 'file-text' },
        { name: 'Case Studies (20+)', url: 'case-studies.html', icon: 'folder-open' },
        { name: 'Blog Posts', url: 'blog.html', icon: 'rss' },
        { name: 'Resources', url: 'resources.html', icon: 'library' }
    ],
    socialLinks: [
        { name: 'LinkedIn', url: 'https://linkedin.com/in/rohitkumarsharepoint', icon: 'linkedin' },
        { name: 'Twitter', url: '#', icon: 'twitter' }
    ],
    year: new Date().getFullYear()
};

// Initialize footer
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    
    if (footer) {
        footer.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 py-16">
                <div class="grid md:grid-cols-5 gap-8">
                    <!-- Company Info -->
                    <div class="md:col-span-1">
                        <h3 class="text-2xl font-bold gradient-text mb-4">${footerData.company.name}</h3>
                        <p class="text-gray-400 mb-4">${footerData.company.tagline}</p>
                        <p class="text-gray-500 text-sm">${footerData.company.location}</p>
                    </div>
                    
                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul class="space-y-2">
                            ${footerData.quickLinks.map(link => `
                                <li><a href="${link.url}" class="text-gray-400 hover:text-[#0078D4] transition-colors duration-200 flex items-center gap-2"><i data-lucide="${link.icon}" class="w-4 h-4"></i> ${link.name}</a></li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <!-- Services -->
                    <div>
                        <h4 class="text-lg font-semibold mb-4 text-white">Services</h4>
                        <ul class="space-y-2">
                            ${footerData.services.map(service => `
                                <li><a href="${service.url}" class="text-gray-400 hover:text-[#0078D4] transition-colors duration-200 flex items-center gap-2"><i data-lucide="${service.icon}" class="w-4 h-4"></i> ${service.name}</a></li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <!-- Resources -->
                    <div>
                        <h4 class="text-lg font-semibold mb-4 text-white">Resources</h4>
                        <ul class="space-y-2">
                            ${footerData.resources.map(resource => `
                                <li><a href="${resource.url}" class="text-gray-400 hover:text-[#0078D4] transition-colors duration-200 flex items-center gap-2"><i data-lucide="${resource.icon}" class="w-4 h-4"></i> ${resource.name}</a></li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <!-- Contact -->
                    <div>
                        <h4 class="text-lg font-semibold mb-4 text-white">Contact</h4>
                        <ul class="space-y-3">
                            <li class="flex items-center text-gray-400">
                                <i data-lucide="mail" class="w-5 h-5 mr-3 text-[#0078D4]"></i>
                                ${footerData.contact.email}
                            </li>
                            <li class="flex items-center text-gray-400">
                                <i data-lucide="phone" class="w-5 h-5 mr-3 text-[#0078D4]"></i>
                                ${footerData.contact.phone}
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Bottom Bar -->
                <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-500 text-sm">© ${footerData.year} ${footerData.company.name}. All rights reserved.</p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        ${footerData.socialLinks.map(social => `
                            <a href="${social.url}" class="text-gray-400 hover:text-[#0078D4] transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                                <span class="sr-only">${social.name}</span>
                                <i data-lucide="${social.icon}" class="w-6 h-6"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
