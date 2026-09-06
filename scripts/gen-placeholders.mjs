// One-off generator for project placeholder images.
// Run with: node scripts/gen-placeholders.mjs
// Produces one SVG per project into public/projects/ — an on-brand dark card with
// the title and a "PLACEHOLDER" tag. Replace any file with a real 1600x1200
// screenshot later (keep the same filename, or update the `image` path in
// src/app/data/projects.ts).
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'projects');

const items = [
  { file: 'giu-nexus.svg',        title: 'GIU Nexus',                 kind: 'Full-Stack Career Platform', accent: '#a78bfa' },
  { file: 'workflow-engine.svg',  title: 'Workflow Engine',           kind: 'Java · Spring Boot',          accent: '#a78bfa' },
  { file: 'haunted-forest.svg',   title: 'Haunted Forest',            kind: 'Unity · C# · 3D Horror',      accent: '#f59e0b' },
  { file: 'haystack-needle.svg',  title: '5 Million Haystack, 1 Needle', kind: 'First-Person 3D Prototype', accent: '#f59e0b' },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

for (const { file, title, kind, accent } of items) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1200" viewBox="0 0 1600 1200" role="img" aria-label="${esc(title)} — placeholder image">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0a0a"/>
      <stop offset="1" stop-color="#171717"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.42" r="0.6">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.16"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <path d="M64 0H0V64" fill="none" stroke="#ffffff" stroke-opacity="0.04"/>
    </pattern>
  </defs>
  <rect width="1600" height="1200" fill="url(#bg)"/>
  <rect width="1600" height="1200" fill="url(#grid)"/>
  <rect width="1600" height="1200" fill="url(#glow)"/>
  <circle cx="800" cy="500" r="360" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-dasharray="4 10"/>
  <circle cx="800" cy="500" r="270" fill="none" stroke="#ffffff" stroke-opacity="0.05"/>
  <text x="800" y="500" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="104" fill="#fafafa">${esc(title)}</text>
  <text x="800" y="572" text-anchor="middle" font-family="ui-monospace, 'SF Mono', Menlo, monospace" font-size="30" letter-spacing="6" fill="#737373">${esc(kind.toUpperCase())}</text>
  <g transform="translate(800 700)">
    <rect x="-160" y="-26" width="320" height="52" fill="none" stroke="${accent}" stroke-opacity="0.5"/>
    <text x="0" y="8" text-anchor="middle" font-family="ui-monospace, 'SF Mono', Menlo, monospace" font-size="24" letter-spacing="8" fill="${accent}">PLACEHOLDER</text>
  </g>
</svg>
`;
  writeFileSync(join(here, file), svg);
  console.log('wrote', file);
}
