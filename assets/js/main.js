/* ================================================================
   ArioAdi — main.js
   ================================================================ */
'use strict';

/* ----------------------------------------------------------------
   1. TRANSLATIONS
---------------------------------------------------------------- */
const i18n = {
  id: {
    /* NAV */
    nav_home:      'Home',
    nav_about:     'Tentang',
    nav_services:  'Layanan',
    nav_portfolio: 'Portfolio',
    nav_pricing:   'Harga',
    nav_contact:   'Hubungi Kami',

    /* HERO */
    hero_line1:        'BANGUN WEBSITE',
    hero_line2:        'UNTUK',
    hero_line3:        'BISNISMU',
    hero_sub:          'Tingkatkan brand kamu dengan solusi desain terbaik. Dari branding hingga UI, kami wujudkan visimu dengan layanan digital yang dipersonalisasi.',
    hero_cta1:         'Ayo ngobrol',
    hero_cta2:         'Lihat Portfolio',
    stat_clients:      'Klien Puas',
    stat_growth_label: 'Growth Rate',
    stat_growth_sub:   'Peningkatan Revenue',

    /* TRUST */
    trust_clients:  'Klien Puas',
    trust_exp:      'Tahun Pengalaman',
    trust_projects: 'Proyek Selesai',
    trust_revenue:  'Rata-rata Peningkatan Revenue',

    /* ABOUT */
    about_photo:  'Foto tim di sini',
    about_exp:    'Tahun Pengalaman',
    about_tag:    'Tentang kami',
    about_title:  'Kenalan dengan ArioAdi:<br>Mitra Desain Kamu',
    about_p1:     'Kami bukan sekadar desainer — kami adalah kreator, pemecah masalah, dan sahabat terbaik brand kamu. Di ArioAdi, kami hidup dan bernapas dengan desain, dari visual yang memukau hingga pengalaman digital yang mulus.',
    about_p2:     'Anggap kami sebagai perpanjangan tim kamu, siap mewujudkan ide-idemu dengan presisi, kreativitas, dan semangat.',
    about_stat:   'Rata-rata peningkatan revenue klien',

    /* SERVICES */
    svc_tag:    'Yang kami kerjakan',
    svc_title:  'Kami mendesain yang bermakna,<br>bukan sekadar kesan pertama',
    svc_start:  'Mulai proyek',
    svc1_title: 'Brand Identity',
    svc1_desc:  'Logo, visual system, dan brand guidelines yang membuat kamu langsung dikenali dan diingat.',
    svc2_title: 'UI/UX Design',
    svc2_desc:  'Interface yang indah, intuitif, dan fokus pada konversi — bukan sekadar bagus dipandang.',
    svc3_title: 'Web Design',
    svc3_desc:  'Website berkualitas tinggi yang merepresentasikan brand kamu dan menghasilkan bisnis nyata.',
    svc4_title: 'Mobile App Design',
    svc4_desc:  'Desain app Android/iOS yang memanjakan pengguna dan membuat mereka terus kembali.',
    svc5_title: 'Frontend Development',
    svc5_desc:  'Kode bersih dan modern dengan React, Tailwind, dan lebih — desain jadi realita pixel-perfect.',
    svc6_title: 'Software Development',
    svc6_desc:  'Solusi full-stack dan web apps yang dibangun untuk performa, keamanan, dan skalabilitas.',

    /* SKILLS */
    skills_tag:   'Tech Stack',
    skills_title: 'Tools & teknologi<br>yang kami kuasai',
    skills_sub:   'Kami bekerja dengan stack modern untuk hasil yang cepat, scalable, dan maintainable.',

    /* PORTFOLIO */
    port_tag:         'Portfolio',
    port_title:       'Jelajahi proyek-proyek<br>terbaik kami',
    port_all:         'Semua proyek',
    port_view:        'Lihat Proyek →',
    // port_cat1:        'Web Design',
    // port_cat2:        'UI/UX Design',
    // port_cat3:        'Mobile App',
    // port_cat4:        'Branding',
    // port_item1_title: 'Brand &amp; Identity System',
    // port_item1_sub:   'Redesign platform e-commerce',
    // port_item2_title: 'AI Product Dashboard',
    // port_item2_sub:   'Platform Analitik SaaS',
    // port_item3_title: 'FinTech Mobile Experience',
    // port_item3_sub:   'Aplikasi perbankan iOS &amp; Android',
    // port_item4_title: 'Startup Brand Package',
    // port_item4_sub:   'Brand identity lengkap',

    /* PROCESS */
    proc_tag:    'Cara kami bekerja',
    proc_title:  'Bagaimana kami mengerjakan proyekmu dari awal sampai selesai',
    proc1_badge: 'Define',
    proc1_title: 'Discovery &amp; Strategy',
    proc1_desc:  'Kami mendalami brand, audiens, dan tujuan bisnis kamu untuk membuat peta jalan strategis yang menjadi acuan setiap keputusan desain.',
    proc2_badge: 'Design',
    proc2_title: 'Creative Design',
    proc2_desc:  'Dari wireframe hingga prototype visual yang memukau — semua dikerjakan di Figma dengan standar UI/UX terbaik.',
    proc3_badge: 'Build',
    proc3_title: 'Development',
    proc3_desc:  'Kode bersih dan scalable bertemu desain pixel-perfect. Kami build produk digital yang cepat, accessible, dan siap perform.',
    proc4_badge: 'Launch',
    proc4_title: 'Launch &amp; Support',
    proc4_desc:  'Kami launch dengan presisi dan tetap menemani kamu pasca-launch untuk optimisasi, update, dan perbaikan berkelanjutan.',
    proc_done:   '✦ Siap dikirimkan!',

    /* TESTIMONIALS */
    testi_tag:   'Ulasan',
    testi_title: 'Kata mereka tentang<br>hasil kerja kami',

    /* PRICING */
    price_tag:       'Harga Layanan',
    price_title:     'Investasi yang tepat<br>untuk brand kamu',
    price_sub:       'Harga transparan tanpa biaya tersembunyi. Konsultasi gratis sebelum deal.',
    price_popular:   '✦ Paling Populer',
    price1_tier:     'Starter',
    price1_desc:     'Cocok untuk UMKM &amp; personal brand yang baru mulai go digital.',
    price2_tier:     'Professional',
    price2_desc:     'Ideal untuk bisnis yang serius membangun kehadiran digital yang kuat.',
    price3_tier:     'Enterprise',
    price3_desc:     'Solusi digital penuh untuk perusahaan &amp; startup yang ingin scale cepat.',
    price_note:      'Mulai dari · tergantung kompleksitas',
    price_note2:     'Mulai dari · custom sesuai kebutuhan',
    
    /* FREE FEATURES */
    free_domain:     'Free Domain (.com / .my.id)',
    free_ssl:        'SSL/HTTPS Gratis',
    free_hosting:    'Hosting Gratis (1 Tahun)',
    free_consultation: '✓ Konsultasi Gratis',
    free_support:    'Support Gratis',
    
    p1f1: 'Landing page 1 halaman',    p1f2: 'Desain responsif mobile',
    p1f3: 'Free Domain (.com)',        p1f4: 'Delivery 5–7 hari kerja',
    p1f5: 'Source file HTML/CSS',      p1f6: 'SSL/HTTPS Gratis',
    p1f7: 'Konsultasi Gratis',
    p2f1: 'Website multi-halaman (5–8 hal.)', p2f2: 'Desain UI/UX dari Figma',
    p2f3: 'Responsif semua device',    p2f4: 'Free Domain (.com)',
    p2f5: 'SEO on-page dasar',         p2f6: 'SSL/HTTPS + Hosting 1 Tahun',
    p2f7: 'Delivery 14–21 hari kerja',
    p3f1: 'Aplikasi web full-stack',   p3f2: 'Desain UI/UX premium (Figma)',
    p3f3: 'React / Laravel / CodeIgniter', p3f4: 'Database &amp; REST API',
    p3f5: 'Free Domain (.com / .my.id)', p3f6: 'SSL/HTTPS + Hosting Unlimited',
    p3f7: '✓ Konsultasi Gratis Selamanya',
    price_cta1:        'Mulai Konsultasi',
    price_cta2:        'Pilih Paket Ini',
    price_cta3:        'Hubungi Kami',
    price_disclaimer:  '*Biaya Website Custom Menyesuaikan Kerumitan. Konsultasikan Kebutuhan Anda dengan Tim Kami & dapatkan penawaran terbaik. Konsultasi Gratis - Tidak ada biaya tersembunyi.',

    /* CTA */
    cta_sub:   '— Yuk mulai desain proyekmu',
    cta_title: 'Siap mengubah brand kamu<br>menjadi gaya yang tak terlupakan?',
    cta_body:  'Mari bangun sesuatu yang luar biasa bersama.',
    cta_btn:   'Kirim pesan',
    cta_whatsapp: 'Chat via WhatsApp',
    free_notice: '✓ Bebas Konsultasi - Tidak ada biaya tersembunyi',

    /* FOOTER */
    footer_tagline: 'Membuat brand dan pengalaman digital yang meninggalkan kesan mendalam.',
    footer_nav:     'Navigasi',
    footer_support: 'Bantuan',
    footer_social:  'Media Sosial',
    footer_privacy: 'Kebijakan Privasi',
    footer_terms:   'Syarat & Ketentuan',
    footer_copy:    '© 2025 ArioAdi. Hak cipta dilindungi.',
    footer_credit:  'Dibuat dengan ♥ oleh ArioAdi',
  },

  en: {
    /* NAV */
    nav_home:      'Home',
    nav_about:     'About',
    nav_services:  'Services',
    nav_portfolio: 'Portfolio',
    nav_pricing:   'Pricing',
    nav_contact:   'Contact Us',

    /* HERO */
    hero_line1:        'BUILD WEBSITES',
    hero_line2:        'THAT WORK',
    hero_line3:        'FOR YOUR BUSINESS',
    hero_sub:          'Elevate your brand with exceptional design solutions. From branding to UI, we bring your vision to life with tailored digital services.',
    hero_cta1:         "Let's talk",
    hero_cta2:         'View Portfolio',
    stat_clients:      'Satisfied Clients',
    stat_growth_label: 'Growth Rate',
    stat_growth_sub:   'Increased revenues',

    /* TRUST */
    trust_clients:  'Happy Clients',
    trust_exp:      'Years Experience',
    trust_projects: 'Projects Done',
    trust_revenue:  'Avg. Revenue Growth',

    /* ABOUT */
    about_photo:  'Team photo here',
    about_exp:    'Years Experience',
    about_tag:    'About us',
    about_title:  'Meet ArioAdi:<br>Your Design Partners',
    about_p1:     "We're not just designers — we're creators, problem-solvers, and your brand's best friends. At ArioAdi, we live and breathe design, from captivating visuals to seamless digital experiences.",
    about_p2:     'Think of us as an extension of your team, ready to bring your ideas to life with precision, creativity, and passion.',
    about_stat:   'Average client revenue growth',

    /* SERVICES */
    svc_tag:    'What we do',
    svc_title:  'We design meaningful,<br>not just quick impressions',
    svc_start:  'Start a project',
    svc1_title: 'Brand Identity',
    svc1_desc:  'Logos, visual systems, and brand guidelines that make you instantly recognizable and memorable.',
    svc2_title: 'UI/UX Design',
    svc2_desc:  'Beautiful, intuitive interfaces focused on conversions — not just pretty to look at.',
    svc3_title: 'Web Design',
    svc3_desc:  'High-quality websites that represent your brand and generate real business results.',
    svc4_title: 'Mobile App Design',
    svc4_desc:  'Android/iOS app designs that delight users and keep them coming back for more.',
    svc5_title: 'Frontend Development',
    svc5_desc:  'Clean, modern code with React, Tailwind, and more — turning designs into pixel-perfect reality.',
    svc6_title: 'Software Development',
    svc6_desc:  'Full-stack solutions and web apps built for performance, security, and scalability.',

    /* SKILLS */
    skills_tag:   'Tech Stack',
    skills_title: 'Tools & technologies<br>we master',
    skills_sub:   'We work with modern stacks to deliver fast, scalable, and maintainable results.',

    /* PORTFOLIO */
    port_tag:         'Portfolio',
    port_title:       'Explore our most<br>successful projects',
    port_all:         'All projects',
    // port_view:        'View Project →',
    // port_cat1:        'Web Design',
    // port_cat2:        'UI/UX Design',
    // port_cat3:        'Mobile App',
    // port_cat4:        'Branding',
    // port_item1_title: 'Brand &amp; Identity System',
    // port_item1_sub:   'E-commerce platform redesign',
    // port_item2_title: 'AI Product Dashboard',
    // port_item2_sub:   'SaaS Analytics Platform',
    // port_item3_title: 'FinTech Mobile Experience',
    // port_item3_sub:   'iOS &amp; Android banking app',
    // port_item4_title: 'Startup Brand Package',
    // port_item4_sub:   'Complete brand identity',

    /* PROCESS */
    proc_tag:    'How we work',
    proc_title:  'How we take your project from start to finish',
    proc1_badge: 'Define',
    proc1_title: 'Discovery &amp; Strategy',
    proc1_desc:  'We dive deep into your brand, audience, and business goals to create a strategic roadmap that guides every design decision.',
    proc2_badge: 'Design',
    proc2_title: 'Creative Design',
    proc2_desc:  'From wireframes to stunning visual prototypes — everything crafted in Figma to the highest UI/UX standards.',
    proc3_badge: 'Build',
    proc3_title: 'Development',
    proc3_desc:  'Clean, scalable code meets pixel-perfect design. We build digital products that are fast, accessible, and ready to perform.',
    proc4_badge: 'Launch',
    proc4_title: 'Launch &amp; Support',
    proc4_desc:  'We launch with precision and stay by your side post-launch for optimization, updates, and continuous improvements.',
    proc_done:   '✦ Ready for delivery!',

    /* TESTIMONIALS */
    testi_tag:   'Reviews',
    testi_title: "What our clients say<br>about our work",

    /* PRICING */
    price_tag:       'Pricing',
    price_title:     'The right investment<br>for your brand',
    price_sub:       'Transparent pricing with no hidden fees. Free consultation before you commit.',
    price_popular:   '✦ Most Popular',
    price1_tier:     'Starter',
    price1_desc:     'Perfect for SMEs &amp; personal brands just starting their digital journey.',
    price2_tier:     'Professional',
    price2_desc:     'Ideal for businesses serious about building a strong digital presence.',
    price3_tier:     'Enterprise',
    price3_desc:     'Full digital solution for companies &amp; startups that want to scale fast.',
    price_note:      'Starting from · depends on complexity',
    price_note2:     'Starting from · custom to your needs',
    
    /* FREE FEATURES */
    free_domain:     'Free Domain (.com / .my.id)',
    free_ssl:        'Free SSL/HTTPS',
    free_hosting:    'Free Hosting (1 Year)',
    free_consultation: '✓ Free Consultation',
    free_support:    'Free Support',
    
    p1f1: 'Single-page landing page',  p1f2: 'Mobile responsive design',
    p1f3: 'Free Domain (.com)',        p1f4: 'Delivery in 5–7 business days',
    p1f5: 'HTML/CSS source files',     p1f6: 'Free SSL/HTTPS',
    p1f7: 'Free Consultation',
    p2f1: 'Multi-page website (5–8 pages)', p2f2: 'UI/UX design in Figma',
    p2f3: 'All-device responsive',     p2f4: 'Free Domain (.com)',
    p2f5: 'Basic SEO on-page',         p2f6: 'Free SSL/HTTPS + Hosting 1 Year',
    p2f7: 'Delivery in 14–21 business days',
    p3f1: 'Full-stack web application', p3f2: 'Premium UI/UX design (Figma)',
    p3f3: 'React / Laravel / CodeIgniter', p3f4: 'Database &amp; REST API',
    p3f5: 'Free Domain (.com / .my.id)', p3f6: 'Free SSL/HTTPS + Unlimited Hosting',
    p3f7: '✓ Lifetime Free Consultation',
    price_cta1:        'Start Consultation',
    price_cta2:        'Choose This Plan',
    price_cta3:        'Contact Us',
    price_disclaimer:  '*Custom Website Pricing Depends on Complexity. Consult Your Needs with Our Team & Get the Best Offer. Free Consultation - No Hidden Fees.',

    /* CTA */
    cta_sub:   "— Let's start designing your project",
    cta_title: 'Ready to transform your brand<br>into an irresistible style?',
    cta_body:  "Let's build something remarkable together.",
    cta_btn:   'Send a message',
    cta_whatsapp: 'Chat via WhatsApp',
    free_notice: '✓ Free Consultation - No Hidden Fees',

    /* FOOTER */
    footer_tagline: 'Crafting brands and digital experiences that leave a lasting impression.',
    footer_nav:     'Navigate',
    footer_support: 'Support',
    footer_social:  'Social Media',
    footer_privacy: 'Privacy Policy',
    footer_terms:   'Terms',
    footer_copy:    '© 2025 ArioAdi. All rights reserved.',
    footer_credit:  'Designed with ♥ by ArioAdi',
  },
};

/* ----------------------------------------------------------------
   2. MARQUEE DATA
---------------------------------------------------------------- */
const marqueeItems = {
  hero: [
    'Web Development','UI/UX Design','Backend Dev',
    'Frontend Dev','Mobile App','REST API',
    'Full-Stack','Software Dev',
  ],
  svc: [
    '✦ Web Design','✦ UI/UX Design',
    '✦ Frontend Dev','✦ Website Dev','✦ Mobile App',
    ,'✦ Software Dev',
  ],
};

/* ----------------------------------------------------------------
   3. LANGUAGE STATE
---------------------------------------------------------------- */
let currentLang = 'id';

/* ---- Apply translations to DOM ---- */
function applyTranslations(lang) {
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
}

/* ---- Update toggle button UI ---- */
function updateLangUI(lang) {
  const label = document.getElementById('langLabel');
  const pill  = document.getElementById('langPill');
  if (!label || !pill) return;
  if (lang === 'id') {
    label.textContent = 'EN';
    pill.textContent  = 'ID';
  } else {
    label.textContent = 'ID';
    pill.textContent  = 'EN';
  }
}

/* ---- Set language (public) ---- */
function setLanguage(lang) {
  currentLang = lang;
  applyTranslations(lang);
  updateLangUI(lang);
  try { localStorage.setItem('arioadi_lang', lang); } catch (_) {}
}

/* ---- Toggle (called from HTML onclick) ---- */
window.toggleLang = function () {
  setLanguage(currentLang === 'id' ? 'en' : 'id');
};

/* ----------------------------------------------------------------
   4. MARQUEE BUILDER
---------------------------------------------------------------- */
function buildMarqueeTrack(items, type) {
  if (type === 'hero') {
    return items.map(t =>
      `<span class="font-display text-base font-bold uppercase tracking-[0.18em] px-10 whitespace-nowrap" style="color:rgba(255,255,255,0.82)">${t}</span>`
    ).join('');
  }
  return items.map(t =>
    `<span class="flex-none inline-flex items-center border border-white/20 text-white text-sm font-medium px-5 py-1.5 rounded-full whitespace-nowrap hover:bg-white hover:text-primary transition-all duration-300 cursor-default">${t}</span>`
  ).join('');
}

function renderMarquees() {
  ['heroMarquee', 'svcMarquee'].forEach(id => {
    const el   = document.getElementById(id);
    if (!el) return;
    const type = id === 'heroMarquee' ? 'hero' : 'svc';
    const html = buildMarqueeTrack(marqueeItems[type], type);
    el.innerHTML = html + html; // two copies → seamless loop
  });
}

/* ----------------------------------------------------------------
   5. NAVBAR SCROLL ANIMATION
---------------------------------------------------------------- */
function initNavbar() {
  const navWrapper = document.getElementById('nav-wrapper');
  const navHeader  = document.getElementById('nav-header');
  const navInner   = document.getElementById('nav-inner');
  if (!navWrapper || !navHeader || !navInner) return;

  let ticking = false;

  function updateNavbar() {
    if (window.scrollY > 50) {
      /* ── floating pill ── */
      navWrapper.classList.remove('px-0', 'pt-0');
      navWrapper.classList.add('px-4', 'pt-4', 'sm:px-6');

      navHeader.classList.remove(
        'max-w-none', 'border-b', 'border-brand-border',
        'rounded-none', 'shadow-none', 'bg-white/90'
      );
      navHeader.classList.add(
        'max-w-5xl', 'rounded-[40px]', 'shadow-lg',
        'border', 'border-slate-200', 'bg-white/95'
      );

      navInner.classList.remove('py-4');
      navInner.classList.add('py-3');
    } else {
      /* ── full-width top ── */
      navWrapper.classList.add('px-0', 'pt-0');
      navWrapper.classList.remove('px-4', 'pt-4', 'sm:px-6');

      navHeader.classList.add(
        'max-w-none', 'border-b', 'border-brand-border',
        'rounded-none', 'shadow-none', 'bg-white/90'
      );
      navHeader.classList.remove(
        'max-w-5xl', 'rounded-[40px]', 'shadow-lg',
        'border', 'border-slate-200', 'bg-white/95'
      );

      navInner.classList.add('py-4');
      navInner.classList.remove('py-3');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });
}

/* ----------------------------------------------------------------
   6. SMOOTH SCROLL
---------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ----------------------------------------------------------------
   7. SKILL BARS (IntersectionObserver)
---------------------------------------------------------------- */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-inner');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.pct + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });
  bars.forEach(b => observer.observe(b));
}

/* ----------------------------------------------------------------
   8. INIT
---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  /* load saved lang */
  let saved = 'id';
  try { saved = localStorage.getItem('arioadi_lang') || 'id'; } catch (_) {}

  setLanguage(saved);
  renderMarquees();
  initNavbar();
  initSmoothScroll();
  initSkillBars();
});