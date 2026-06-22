/**
 * main.js — Portfolio Interactivity
 * Pedro Henrique Reck
 *
 * Modules:
 *   1. Terminal Typewriter Effect
 *   2. Navbar Scroll Behaviour
 *   3. Hamburger Menu
 *   4. Active Nav Link Highlight (IntersectionObserver)
 *   5. Scroll-triggered Skill Card Animations
 *   6. Footer Year
 */

'use strict';

/* ─────────────────────────────────────────
   1. TERMINAL TYPEWRITER
   ───────────────────────────────────────── */
(function initTypewriter() {
  const el = document.getElementById('terminalText');
  if (!el) return;

  /** Roles to cycle through */
  const roles = [
    'Software Engineering Student',
    'Backend Developer',
    'Python & MySQL Enthusiast',
    'Open to Internships',
    'Continuous Learner',
  ];

  const TYPING_SPEED   = 70;   // ms per character
  const DELETING_SPEED = 35;   // ms per character
  const PAUSE_AFTER    = 1800; // ms after full text
  const PAUSE_BEFORE   = 500;  // ms before typing next

  let roleIndex   = 0;
  let charIndex   = 0;
  let isDeleting  = false;

  function tick() {
    const current = roles[roleIndex];

    if (!isDeleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting  = false;
        roleIndex   = (roleIndex + 1) % roles.length;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }
    }

    setTimeout(tick, isDeleting ? DELETING_SPEED : TYPING_SPEED);
  }

  // Slight delay so the page is visually settled before animation starts
  setTimeout(tick, 800);
})();


/* ─────────────────────────────────────────
   2. NAVBAR SCROLL BEHAVIOUR
   ───────────────────────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 20;

  function handleScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on load in case page is pre-scrolled
})();


/* ─────────────────────────────────────────
   3. HAMBURGER MENU
   ───────────────────────────────────────── */
(function initHamburger() {
  const toggle = document.getElementById('navToggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  function closeMenu() {
    toggle.classList.remove('open');
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    links.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a nav link is clicked
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
})();


/* ─────────────────────────────────────────
   4. ACTIVE NAV LINK HIGHLIGHT
   ───────────────────────────────────────── */
(function initActiveNav() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      });
    },
    {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    }
  );

  sections.forEach(section => observer.observe(section));
})();


/* ─────────────────────────────────────────
   5. SCROLL-TRIGGERED ANIMATIONS
   Fades in skill cards and timeline items
   as they enter the viewport.
   ───────────────────────────────────────── */
(function initScrollAnimations() {
  const ANIMATED_SELECTORS = [
    '.skill-category',
    '.timeline-item',
    '.project-card',
  ];

  const elements = document.querySelectorAll(ANIMATED_SELECTORS.join(', '));
  if (!elements.length) return;

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;

        // Stagger the animation based on element order within its parent
        const siblings = [...entry.target.parentElement.children];
        const index    = siblings.indexOf(entry.target);
        const delay    = Math.min(index * 80, 400); // cap at 400ms

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach(el => observer.observe(el));
})();


/* ─────────────────────────────────────────
   6. FOOTER YEAR — auto-updates the year
   ───────────────────────────────────────── */
(function initFooterYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
})();
