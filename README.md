# Rohit Kumar - SharePoint & Power Platform Expert

A premium static HTML website showcasing SharePoint and Microsoft 365 consulting services with 20+ pages.

## Features

- **Premium Dark Theme**: Ultra-dark slate background (#0B0F19) with high-contrast white text
- **Dynamic Navigation**: JavaScript-powered responsive menu with dropdowns
- **Dynamic Footer**: Auto-generated footer with contact info and social links
- **15 Services**: Comprehensive SharePoint & Power Platform service offerings
- **Industry Solutions**: Healthcare, Finance, Manufacturing, Government, Education
- **Resources**: Blog, Case Studies, Guides, and Technical Resources
- **SEO Optimized**: Meta tags, schema markup, and sitemap
- **Google Analytics**: Integrated tracking
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Production Ready**: Security headers, performance optimized

## Pages (20+)

### Core Pages
- **index.html** - Home page with hero, stats, featured services
- **services.html** - Complete list of 15 services
- **about.html** - Professional background and expertise
- **contact.html** - Contact form and information

### Service Pages
- **sharepoint-consulting.html** - Enterprise SharePoint consulting
- **power-platform.html** - Power Platform solutions
- **microsoft-teams.html** - Teams consulting and development
- **sharepoint-migration.html** - Zero-downtime migration services

### Industry Pages
- **industries.html** - Industry solutions overview
- **healthcare.html** - Healthcare Microsoft 365 solutions
- **finance.html** - Financial services solutions
- **manufacturing.html** - Manufacturing solutions
- **government.html** - Government solutions
- **education.html** - Education solutions

### Resources
- **resources.html** - Guides and technical resources
- **blog.html** - Blog and insights
- **case-studies.html** - Success stories and case studies

## Deployment on Render.com

### Quick Deploy

1. Push this repository to GitHub
2. Go to [render.com](https://render.com)
3. Click "New +" → "Static Site"
4. Connect your GitHub repository
5. Configure:
   - **Build Command**: (leave empty)
   - **Publish Directory**: `new-site`
   - **Branch**: `main` (or your branch)

### Using render.yaml

The repository includes `render.yaml` for automated deployment configuration with:
- Static site configuration
- Security headers
- Redirects from old site structure

### Manual Deploy

```bash
cd new-site
python -m http.server 8000
# Or use any static hosting service
# Examples: Netlify, Vercel, GitHub Pages
```

## Customization

### Update Contact Information

Edit `footer.js`:
```javascript
const footerData = {
    contact: {
        email: 'roohit@outlook.in',
        phone: '+91 9891848489'
    }
};
```

### Update Services

Edit `services-data.js` to add, remove, or modify services.

### Update Navigation

Edit `navigation.js` to change menu items and dropdowns.

### Update Analytics

Replace Google Analytics ID in all HTML files:
```html
gtag('config', 'G-ROHITM36501');
```

## Technologies

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first styling via CDN
- **Vanilla JavaScript**: Dynamic components (no frameworks)
- **Google Fonts**: Inter font family
- **Schema.org**: Structured data for SEO

## SEO Features

- Meta tags for all pages
- Schema.org structured data
- XML sitemap
- Robots.txt
- Open Graph tags ready
- Google Analytics integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- CDN-hosted Tailwind CSS
- Optimized font loading
- Minimal JavaScript
- Static HTML for fast loading
- No build process required

## License

© 2026 Rohit Kumar. All rights reserved.
