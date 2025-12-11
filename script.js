// ============================================
// Navigation - Hamburger Toggle
// ============================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Update aria-expanded for accessibility
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
  });
}

// Close mobile menu when a link is clicked
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (hamburger && navLinks && 
      !hamburger.contains(e.target) && 
      !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    
    // Skip if it's just "#" or mailto link
    if (targetId === '#' || targetId.startsWith('mailto:')) return;
    
    e.preventDefault();
    const target = document.querySelector(targetId);
    
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for sticky navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// Active Nav Link Highlight on Scroll
// ============================================
const sections = document.querySelectorAll('section[id]');

function highlightActiveNavLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightActiveNavLink);
window.addEventListener('load', highlightActiveNavLink);

// ============================================
// Console Message
// ============================================
console.log('%cPortfolio loaded successfully!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cDark theme portfolio built with HTML, CSS & Vanilla JavaScript', 'color: #6c5ce7; font-size: 12px;');
