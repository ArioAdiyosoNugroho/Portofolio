/* ============================================================
   ArionDev — Main Script
   ============================================================ */

(function () {
  'use strict';

  /* ── Smooth scroll for all anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ── Navbar shadow on scroll ── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

})();



// header animation
// header animation
document.addEventListener("DOMContentLoaded", function() {
  const navWrapper = document.getElementById('nav-wrapper');
  const navHeader = document.getElementById('nav-header');
  const navInner = document.getElementById('nav-inner');
  
  let ticking = false;

  function updateNavbar() {
    if (window.scrollY > 50) {
      // Saat Scroll ke Bawah (Floating Pill State)
      navWrapper.classList.remove('px-0', 'pt-0');
      navWrapper.classList.add('px-4', 'pt-4', 'sm:px-6');

      // PERUBAHAN DI SINI: max-w-full dan rounded-none dihapus
      navHeader.classList.remove('max-w-full', 'border-b', 'border-brand-border', 'rounded-none', 'shadow-none', 'bg-white/90');
      // PERUBAHAN DI SINI: max-w-5xl dan rounded-[40px] ditambahkan
      navHeader.classList.add('max-w-5xl', 'rounded-[40px]', 'shadow-lg', 'border', 'border-slate-200', 'bg-white/95');

      navInner.classList.remove('py-4');
      navInner.classList.add('py-3');
    } else {
      // Saat di Paling Atas (Full Width State)
      navWrapper.classList.add('px-0', 'pt-0');
      navWrapper.classList.remove('px-4', 'pt-4', 'sm:px-6');

      // PERUBAHAN DI SINI: Kembali ke max-w-full dan rounded-none
      navHeader.classList.add('max-w-full', 'border-b', 'border-brand-border', 'rounded-none', 'shadow-none', 'bg-white/90');
      navHeader.classList.remove('max-w-5xl', 'rounded-[40px]', 'shadow-lg', 'border', 'border-slate-200', 'bg-white/95');

      navInner.classList.add('py-4');
      navInner.classList.remove('py-3');
    }
    
    ticking = false; 
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  });
});