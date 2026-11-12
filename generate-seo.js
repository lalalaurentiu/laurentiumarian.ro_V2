const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://laurentiumarian.ro';
const BUILD_DIR = path.join(__dirname, 'build');

const pages = [
  { url: '', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects/peviitor', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  sitemap += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '    <xhtml:link rel="alternate" hreflang="ro" href="' + BASE_URL + page.url + '" />\n';
    sitemap += '    <xhtml:link rel="alternate" hreflang="x-default" href="' + BASE_URL + page.url + '" />\n';
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  const sitemapPath = path.join(BUILD_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated at:', sitemapPath);
}

function generateRobotsTxt() {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin/private paths
Disallow: /api/
Disallow: /admin/
Disallow: /private/
`;
  
  const robotsPath = path.join(BUILD_DIR, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log('Robots.txt generated at:', robotsPath);
}

if (!fs.existsSync(BUILD_DIR)) {
  console.error('Build directory not found. Run "npm run build" first.');
  process.exit(1);
}

generateSitemap();
generateRobotsTxt();
console.log('SEO files generated successfully!');