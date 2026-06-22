# 🧑‍💻 Pedro Tafner — Personal Portfolio

> My personal portfolio website, built from scratch with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Live](https://img.shields.io/badge/Live-GitHub%20Pages-2ea44f?style=flat&logo=github)](https://seuusuario.github.io)

---

## 📋 Overview

This is my personal portfolio, showcasing my projects, technical skills, education, and career goals as a Software Engineering student at PUC-Campinas. Designed and developed entirely by me, applying software engineering principles to a front-end project.

---

## ✨ Features

- **Terminal typewriter effect** — animated hero that cycles through roles
- **Fully responsive** — mobile, tablet, and desktop layouts
- **Smooth scroll navigation** with active section highlight
- **Scroll-triggered animations** using `IntersectionObserver`
- **Accessible** — semantic HTML5, ARIA labels, keyboard navigation, `prefers-reduced-motion` support
- **Dark theme** with a consistent design token system (CSS Custom Properties)
- **Zero dependencies** — pure HTML, CSS, and JavaScript

---

## 🗂️ Project Structure

```
pedrotafner.github.io/
├── index.html              # Semantic HTML structure
├── .gitignore
├── LICENSE
├── assets/
│   ├── css/
│   │   ├── reset.css       # CSS reset & base defaults
│   │   └── style.css       # Design tokens + all component styles
│   ├── icons/
│   │   └── favicon.png     # Custom favicon (64×64)
│   ├── images/             # Project screenshots & media
│   └── js/
│       └── main.js         # All interactivity, organized in modules
└── docs/
    └── README.md           # Project documentation
```

---

## 🛠️ Engineering Practices Applied

This project was built with software engineering principles in mind, not just as a visual exercise:

- **Separation of concerns** — structure (HTML), presentation (CSS), and behaviour (JS) are fully decoupled across separate files
- **Design token system** — all colors, spacing, typography, and shadows are defined as CSS Custom Properties in a single place, making the design easy to maintain and update
- **Modular JavaScript** — each feature (typewriter, navbar, hamburger menu, active nav, scroll animations) is encapsulated in its own IIFE module with no global scope pollution
- **Performance-first animations** — scroll-triggered effects use `IntersectionObserver` instead of `scroll` event listeners, avoiding layout thrashing
- **Accessibility** — `aria-label`, `aria-expanded`, `role` attributes, `:focus-visible` styles, and reduced-motion media query support throughout
- **Semantic HTML5** — correct use of `<nav>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`, and `<time>` elements

---

## 🚀 Running Locally

No build tools or package managers required.

**Option 1 — VS Code Live Server (recommended):**
1. Clone the repository
2. Open the folder in VS Code
3. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
4. Click **"Go Live"** in the bottom status bar

**Option 2 — Direct file:**
1. Clone the repository
2. Open `index.html` directly in your browser

```bash
git clone https://github.com/seuusuario/seuusuario.github.io.git
cd seuusuario.github.io
# Open index.html in your browser
```

---

## 📦 Deploying to GitHub Pages

This repository is configured to deploy automatically via GitHub Pages:

1. Push your changes to the `main` branch
2. Go to **Settings → Pages**
3. Set the source to **Deploy from branch → main → / (root)**
4. Your site will be live at `https://seuusuario.github.io`

---

## 📬 Contact

- **Email:** tafner.2902@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/pedro-tafner/
- **GitHub:** https://github.com/PedroTafner

---

*"Always learning, always building."*
