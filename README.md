# Portfolio: Senior Clinical Data Engineer

This repository houses the personal portfolio and digital presence for a Senior Clinical Data Engineer. The platform is designed to signal architectural authority, handle high-traffic interactions (via direct contact methods), and showcase complex case studies in a privacy-compliant manner.

## Tech Stack

*   **Framework**: [Astro](https://astro.build) (v5.0+) - Chosen for zero-JS default and high-performance static generation.
*   **Styling**: Vanilla CSS with modern Flexbox/Grid architectures. No heavy CSS frameworks were used to ensure granular control over the "Premium Dark Mode" aesthetic.
*   **Deployment**: Cloudflare Pages (Edge-optimized delivery).
*   **Assets**: Abstract data-centric imagery generated via AI to match the specific "Healthcare Architecture" user persona.

## Core Architecture

The project follows a component-based architecture optimized for static site generation (SSG):

*   `src/components/`: Reusable UI elements (Hero, Experience, Footer).
*   `src/layouts/`: Global layout wrappers ensuring consistent SEO, meta tags, and sticky footer behavior.
*   `src/pages/`: Route definitions.
    *   `/resume`: A hidden print-optimized route for generating the official PDF resume from HTML.

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```

## Design Philosophy

The UI is intentionally minimalist yet dense with technical signals.
1.  **Direct Connectivity**: Removed friction-heavy forms in favor of direct actionable links (Email, LinkedIn).
2.  **Visual Consistency**: "Dark Mode" by default to align with developer/engineer preferences.
3.  **Performance First**: High Google Lighthouse scores ensured by Astro's island architecture (though currently unused as the site is purely static).
