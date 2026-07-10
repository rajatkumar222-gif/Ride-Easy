/* ===================================================
   RideEasy – Main Global JavaScript
=================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initToast();
  setActiveNavLink();
});

/* ── Navbar ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Menu ── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

/* ── Scroll Animations ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* ── Active Nav Link ── */
function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── Toast System ── */
let toastContainer;
function initToast() {
  toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  document.body.appendChild(toastContainer);
}

window.showToast = function(message, type = 'info') {
  if (!toastContainer) initToast();
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slide-in 0.3s ease reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

/* ── Format Currency ── */
window.formatINR = function(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
};

/* ── Count Up Animation ── */
window.countUp = function(el, target, duration = 2000) {
  let start = 0;
  const step = (target / duration) * 16;
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target.toLocaleString('en-IN'); clearInterval(timer); }
    else { el.textContent = Math.floor(start).toLocaleString('en-IN'); }
  }, 16);
};
