'use strict';

/* ===========================
   TRANSLATIONS
   =========================== */
const translations = {
    'meta.title':        'Portfolio — Data & Development',
    'nav.about':         'About',
    'nav.projects':      'Projects',
    'nav.courses':       'Courses',
    'nav.contact':       'Contact',
    'hero.eyebrow':      'Data Analyst · Developer',
    'hero.title1':       'Turning raw data',
    'hero.title2':       'into clarity',
    'hero.desc':         'I build dashboards, reports, and digital experiences that make complex information feel effortless.',
    'hero.cta':          'View Work',
    'hero.scroll':       'Scroll',
    'about.photoHint':   'Add your photo to assets/photo.jpg',
    'about.lead':        "I'm a data professional who bridges the gap between raw numbers and meaningful stories.",
    'about.body':        'With expertise spanning Power BI, web development, and data engineering, I craft solutions that are as beautiful as they are functional.',
    'about.skills.analytics':   'Analytics',
    'about.skills.development': 'Development',
    'about.skills.tools':       'Tools',
    'filter.all':        'All',
    'card.viewReport':   'View Report',
    'card.visitSite':    'Visit Site',
    'card.viewDashboard':'View Dashboard',
    'card.showDetails':  'Show details',
    'card.hideDetails':  'Hide details',
    'kpi.revenue':       'Total Revenue',
    'kpi.yoy':           'YoY Growth',
    'kpi.share':         'Market Share',
    'kpi.sales':         'Total Sales',
    'kpi.margin':        'Profit Margin',
    'kpi.saved':         'Shipping Saved',
    'detail.overview':   'Overview',
    'detail.dax':        'DAX Measures',
    'detail.insights':   'Key Insights',
    'detail.skills':     'Skills Demonstrated',
    'p1.title': 'Sales Performance Dashboard',
    'p1.desc':  'Interactive report tracking KPIs across regions with drill-through capabilities and custom DAX measures.',
    'p2.title': 'E-Commerce Analytics Portal',
    'p2.desc':  'Full-stack web application with real-time analytics, built with React and Python backend.',
    'p3.title': 'Predictive Sales Forecasting',
    'p3.desc':  'Machine learning model using time-series analysis to forecast quarterly revenue with 94% accuracy.',
    'p4.title': 'Operations KPI Monitor',
    'p4.desc':  'Real-time operational dashboard with automated alerting and executive summary reports.',
    'p5.title': 'Customer Segmentation Report',
    'p5.desc':  'Advanced RFM analysis with customer lifetime value prediction and segment-based targeting insights.',
    'p6.title': 'Data Visualization Library',
    'p6.desc':  'Open-source collection of reusable chart components built with D3.js and React.',
    'p7.tag':   'Power BI · 2 Pages · DataCamp',
    'p7.title': 'Competitor Sales & Market Share Analysis',
    'p7.desc':  'Competitive intelligence report covering 6 countries (2017–2021). Urban segment drives 79% of revenue. AI-powered Key Influencers visual identifies products and manufacturers driving growth.',
    'p7.overview': 'Built on DataCamp CSV & Excel datasets. Power Query used to clean multi-year sales data, standardise country/category fields and build a scalable star-schema model across revenue, product, segment and time dimensions.',
    'p7.dax1': 'Total Revenue & PY Sales',
    'p7.dax2': '% YoY Growth',
    'p7.dax3': 'Market Share %',
    'p7.dax4': 'Revenue by Country & Segment',
    'p7.dax5': 'MoM & Quarterly Growth Trends',
    'p7.dax6': 'Units Sold & Revenue Contribution %',
    'p7.ins1': 'USA dominates at $51M revenue; Japan second at $11M',
    'p7.ins2': 'Urban segment: 79.3% of total revenue',
    'p7.ins3': 'Youth segment: highest growth at +86.8% YoY',
    'p7.ins4': 'Strong quarterly expansion from 2019 to 2021',
    'p7.ins5': 'AI Key Influencers: Artisans manufacturer drove the largest single revenue increase',
    'p7.page1': 'Competitor Sales Analysis',
    'p7.page2': 'Advanced Insights',
    'p8.tag':   'Power BI · 7 Pages · DataCamp',
    'p8.title': 'E-Commerce Sales & Shipping Optimization',
    'p8.desc':  'End-to-end e-commerce BI report for a US pet supplies store. Covers sales profitability, customer geography, product performance, shipping what-if simulation and market basket analysis.',
    'p8.overview': 'DataCamp case study using CSV, XLSX and folder data sources. Power Query built a star-schema model joining sales, products, shipping and customer tables. Dynamic filtering across categories, regions, states and products.',
    'p8.dax1': 'Total Sales, Total Profit & Profit %',
    'p8.dax2': 'Shipping Cost — Baseline vs What-if scenario',
    'p8.dax3': 'Running totals & YoY comparisons',
    'p8.dax4': 'Customer Lifetime Value (LTV)',
    'p8.dax5': 'Sales contribution % & Market Basket metrics',
    'p8.ins1': 'Electronics: highest margin at 44.28%',
    'p8.ins2': 'Top revenue categories: Food ($536K), Disposables ($433K), Pet Food',
    'p8.ins3': 'CA, NY, FL lead in sales volume; ND leads in Customer LTV ($1,278)',
    'p8.ins4': 'Shipping what-if: baseline $385K optimised to $267K — $118K saved',
    'p8.ins5': 'Market basket: Dog & Puppy Pads + Earth Rated Bags are top co-purchase pair',
    'p8.page1': 'Executive Summary',
    'p8.page2': 'Customer Info',
    'p8.page3': 'Product Info',
    'p8.page4': 'Shipping Metrics',
    'p8.page5': 'Market Basket',
    'p8.page6': '+2 more',
    'sites.intro':          'Explore these projects directly in the browser — click to interact with each one.',
    'sites.open':           '↗ Open',
    'sites.loadBtn':        'Load Power BI Preview',
    'sites.loadPreview':    'Load Preview',
    'sites.competitorDesc': 'Revenue gauge · Waterfall by year & segment · Country column chart · Decomposition tree · Key drivers AI visual',
    'sites.ecommerceDesc':  'Executive Summary · Customer geography (Azure Maps) · Product performance · Shipping metrics · Market basket analysis',
    'site3.title':         'Web Application',
    'site3.previewTitle':  'Web Application Preview',
    'site3.previewDesc':   'Replace the data-src attribute with your site URL',
    'contact.lead1':       'Have a project in mind?',
    'contact.lead2':       "Let's talk.",
    'contact.name':        'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email':       'Email',
    'contact.message':     'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.send':        'Send Message',
    'contact.success':     "Message sent! I'll be in touch soon.",
    'footer.tagline':      'Designed & built with care',
    'modal.download':      'Download',
    'modal.loading':       'Loading report…',
};

/* ===========================
   i18n ENGINE (English only)
   =========================== */
function t(key) {
  return translations[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (el.tagName === 'TITLE') {
      document.title = text;
    } else {
      el.textContent = text;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.documentElement.lang = 'en';
}

applyTranslations();

/* ===========================
   CUSTOM CURSOR
   =========================== */
const cursor = document.getElementById('cursor');
const trail  = document.getElementById('cursor-trail');

if (cursor && trail) {
  let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  (function animateTrail() {
    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
    trail.style.left = trailX + 'px';
    trail.style.top  = trailY + 'px';
    requestAnimationFrame(animateTrail);
  })();

  document.querySelectorAll('a, button, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '20px'; cursor.style.height = '20px';
      cursor.style.background = 'transparent';
      cursor.style.border = '2px solid var(--accent)';
      trail.style.opacity = '0';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '10px'; cursor.style.height = '10px';
      cursor.style.background = 'var(--accent)';
      cursor.style.border = 'none';
      trail.style.opacity = '0.5';
    });
  });
}

/* ===========================
   NAV SCROLL
   =========================== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ===========================
   MOBILE MENU
   =========================== */
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  const spans = menuBtn.querySelectorAll('span');
  spans[0].style.transform = menuOpen ? 'translateY(6.5px) rotate(45deg)' : '';
  spans[1].style.transform = menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : '';
});

mobileLinks.forEach(link => link.addEventListener('click', () => {
  menuOpen = false;
  mobileMenu.classList.remove('open');
  menuBtn.querySelectorAll('span').forEach(s => s.style.transform = '');
}));

/* ===========================
   SCROLL REVEAL
   =========================== */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
    let delay = 0;
    siblings.forEach((sib, idx) => { if (sib === entry.target) delay = idx * 80; });
    setTimeout(() => entry.target.classList.add('visible'), delay);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));

/* ===========================
   PROJECT FILTER (disabled — only Power BI projects remain)
   =========================== */
// filter bar removed

/* ===========================
   CONTACT FORM (disabled — form removed)
   =========================== */
// contact form removed

/* ===========================
   ACTIVE NAV HIGHLIGHT
   =========================== */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + id ? 'var(--ink)' : '';
      });
    }
  });
}, { threshold: 0.4 }).observe ? sections.forEach(s => {
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(l => { l.style.color = l.href.endsWith('#' + id) ? 'var(--ink)' : ''; });
      }
    });
  }, { threshold: 0.4 }).observe(s);
}) : null;

/* ===========================
   HERO PARALLAX
   =========================== */
const heroBg = document.querySelector('.hero-bg-text');
if (heroBg) {
  window.addEventListener('scroll', () => {
    heroBg.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.3}px))`;
  }, { passive: true });
}

/* ===========================
   CONTACT FORM
   =========================== */
function handleContactSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('cfSuccess');
  if (success) {
    success.classList.add('visible');
    e.target.querySelector('.cf-submit').disabled = true;
  }
}

/* ===========================
   CARD DETAIL EXPAND
   =========================== */
document.querySelectorAll('.card-expand-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const panel = document.getElementById(btn.dataset.target);
    if (!panel) return;
    const isOpen = panel.classList.contains('open');
    panel.classList.toggle('open', !isOpen);
    btn.classList.toggle('open', !isOpen);
    btn.querySelector('.expand-label').textContent = isOpen ? t('card.showDetails') : t('card.hideDetails');
  });
});

/* ===========================
   REPORT MODAL
   =========================== */
const reports = {
  competitor: { src: 'assets/competitor_sales_analysis.pdf', title: 'Competitor Sales Analysis', pages: '5 pages' },
  ecommerce:  { src: 'assets/eccomerce_analysis.pdf',        title: 'E-Commerce Analysis',        pages: '7 pages' },
};

const modal        = document.getElementById('reportModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose   = document.getElementById('modalClose');
const reportEmbed  = document.getElementById('reportEmbed');
const modalUrl     = document.getElementById('modalUrl');
const modalPageInfo = document.getElementById('modalPageInfo');
const modalDownload = document.getElementById('modalDownload');
const modalLoading  = document.getElementById('modalLoading');

function openModal(key) {
  const report = reports[key];
  if (!report) return;
  modalLoading.classList.remove('hidden');
  reportEmbed.src = '';
  modalUrl.textContent = report.src;
  modalPageInfo.textContent = report.pages;
  modalDownload.href = report.src;
  modalDownload.setAttribute('download', report.title + '.pdf');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    reportEmbed.src = report.src;
    reportEmbed.onload = () => modalLoading.classList.add('hidden');
    setTimeout(() => modalLoading.classList.add('hidden'), 3000);
  }, 120);
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { reportEmbed.src = ''; }, 350);
}

document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', e => { e.stopPropagation(); openModal(btn.dataset.modal); });
});
modalClose    && modalClose.addEventListener('click', closeModal);
modalBackdrop && modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ===========================
   CARD SLIDESHOWS
   =========================== */
document.querySelectorAll('.card-slideshow').forEach(show => {
  const slides = show.querySelectorAll('.slide');
  const dots   = show.querySelectorAll('.dot');
  const prev   = show.querySelector('.slide-prev');
  const next   = show.querySelector('.slide-next');
  let current  = 0;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current] && dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current] && dots[current].classList.add('active');
  }

  prev && prev.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
  next && next.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
  dots.forEach((dot, i) => dot.addEventListener('click', e => { e.stopPropagation(); goTo(i); }));
});

/* ===========================
   SITES / LOAD IFRAME (removed)
   =========================== */
