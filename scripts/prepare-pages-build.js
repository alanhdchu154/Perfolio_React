const fs = require('fs');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(buildDirectory, 'index.html');
const resumePath = path.join(buildDirectory, 'Resume.pdf');

const routes = [
    'case-studies/walmart-demand-supply',
    'case-studies/three-party-ai',
    'case-studies/giis-underworld',
    'articles/three-party-ai-findings',
    'articles/underworld-free-souls',
];

if (!fs.existsSync(indexPath)) {
    throw new Error('Run the production build before preparing GitHub Pages.');
}

fs.rmSync(resumePath, { force: true });
fs.copyFileSync(indexPath, path.join(buildDirectory, '404.html'));

for (const route of routes) {
    const routeDirectory = path.join(buildDirectory, route);
    fs.mkdirSync(routeDirectory, { recursive: true });
    fs.copyFileSync(indexPath, path.join(routeDirectory, 'index.html'));
}

console.log(`Prepared GitHub Pages build with ${routes.length} deep-link routes.`);
