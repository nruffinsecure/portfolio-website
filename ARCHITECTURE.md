# Architecture & Design Decisions

**Author**: System Architect
**Context**: Portfolio Refactor for Senior Engineering Role

## 1. Static Site Generation (SSG) over SPA
**Decision**: We utilized **Astro** in SSG mode.
**Reasoning**: A portfolio is read-heavy processing with zero need for complex client-side state management. React/Next.js would have introduced unnecessary hydration overhead. Astro ships zero JavaScript to the client by default, ensuring instant First Contentful Paint (FCP) — a critical "competence signal" for an engineering role.

## 2. Global Layout & Sticky Footer
**Decision**: Implemented a CSS Flexbox Column layout (`min-height: 100vh`) for the `MainLayout`.
**Reasoning**: Previous attempts using `height: 100%` on the body element caused scrolling inconsistencies on mobile browsers (Safari iOS) due to dynamic viewport resizing. The Flexbox approach (`flex: 1` on `<main>`) creates a robust sticky footer that pushes to the bottom of the viewport content-agnostically without overflow hacks.

## 3. Communication Channel Strategy
**Decision**: Deprecation of Formspree Contact Forms.
**Reasoning**:
*   *Signal-to-Noise*: Web forms invite low-intent spam.
*   *Professionalism*: High-value recruiters and hiring managers prefer direct, verifiable channels (LinkedIn, Corporate Email).
*   *UX*: We replaced the form with a "Digital Business Card" component, reducing interaction cost to a single click.

## 4. Resume as Code
**Decision**: `src/pages/resume.astro` (Print-to-PDF).
**Reasoning**: Maintaining binary files (Word/PDF) alongside code leads to version drift. By building the resume as a simplified HTML/CSS page using the system font stack (`Inter`), we ensure:
1.  **ATS Readability**: The text is semantic HTML.
2.  **Version Control**: Resume content is diff-able in Git.
3.  **Perfect Formatting**: Browser print engines now render CSS Grid/Flexbox with high fidelity, superior to manual word processing alignment.

## 5. Visual Identity (Abstract Tech)
**Decision**: Recursive/Network-based background imagery.
**Reasoning**: Previous "Landscape" imagery was too generic. We generated custom assets representing "Nodes," "Data Flow," and "Server Architecture" to subtly reinforce the candidate's specialization in distributed systems and data pipelines.
