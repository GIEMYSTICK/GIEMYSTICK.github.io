// Run at the start of body so the loader is independent of third-party scripts.
(() => {
  'use strict';

  if (!document.body || document.getElementById('site-preloader')) return;

  let language = new URLSearchParams(location.search).get('lang');
  let theme = 'light';
  try {
    language = language || localStorage.getItem('language');
    theme = localStorage.getItem('theme') || theme;
  } catch {
    // Private browsing or blocked storage must not prevent the page opening.
  }

  const style = document.createElement('style');
  style.textContent = `
    #site-preloader {
      position: fixed; inset: 0; z-index: 2900;
      display: grid; place-items: center; padding: 24px;
      background: #f7f7f4; color: #1f211e;
      font-family: 'Prompt', system-ui, sans-serif;
      pointer-events: none;
      transition: opacity 240ms ease, visibility 240ms ease;
      animation: preloader-safety 0s 4s forwards;
    }
    #site-preloader[data-theme="dark"] { background: #171815; color: #f4f2ec; }
    #site-preloader.is-leaving { opacity: 0; visibility: hidden; }
    #site-preloader .preloader-content { display: grid; justify-items: center; gap: 16px; text-align: center; }
    #site-preloader .preloader-mark { position: relative; display: grid; place-items: center; width: 96px; height: 96px; }
    #site-preloader .preloader-mark::before {
      content: ''; position: absolute; inset: 0; border-radius: 50%;
      border: 1px solid rgba(214, 155, 50, .22);
    }
    #site-preloader .preloader-mark::after {
      content: ''; position: absolute; inset: 0; border-radius: 50%;
      border: 2px solid transparent; border-top-color: #d69b32;
      animation: preloader-orbit 1.4s linear infinite;
    }
    #site-preloader img { width: 58px; height: 58px; object-fit: contain; }
    #site-preloader .preloader-name { margin: 4px 0 0; font-size: 22px; font-weight: 600; letter-spacing: -.5px; line-height: 1.4; }
    #site-preloader .preloader-caption { margin: 0; color: #73766f; font-size: 11px; letter-spacing: 2px; line-height: 1.6; }
    #site-preloader .preloader-status { margin: 4px 0 0; color: #73766f; font-size: 12px; line-height: 1.6; }
    #site-preloader[data-theme="dark"] .preloader-caption,
    #site-preloader[data-theme="dark"] .preloader-status { color: #a9aaa1; }
    @keyframes preloader-orbit { to { transform: rotate(360deg); } }
    @keyframes preloader-safety { to { visibility: hidden; opacity: 0; } }
    @media (prefers-reduced-motion: reduce) {
      #site-preloader { transition: none; }
      #site-preloader .preloader-mark::after { animation: none; }
    }
    @media print { #site-preloader { display: none; } }
  `;

  const loader = document.createElement('div');
  loader.id = 'site-preloader';
  loader.dataset.theme = theme === 'dark' ? 'dark' : 'light';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-live', 'polite');
  loader.innerHTML = `
    <div class="preloader-content">
      <div class="preloader-mark" aria-hidden="true"><img alt="" width="58" height="58"></div>
      <p class="preloader-name">Portfolio</p>
      <p class="preloader-caption">COMPUTER ENGINEERING</p>
      <p class="preloader-status"></p>
    </div>
  `;
  // Resolve from this script, including on nested pages with a base element.
  const logo = loader.querySelector('img');
  logo.src = new URL('images/portfolio-emblem.png', document.currentScript.src).href;
  logo.addEventListener('error', () => { logo.hidden = true; }, { once: true });
  loader.querySelector('.preloader-status').textContent = language === 'en'
    ? 'Preparing your portfolio experience'
    : 'กำลังเตรียมหน้าเว็บไซต์';

  let dismissed = false;
  let safetyTimer;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(safetyTimer);
    document.removeEventListener('DOMContentLoaded', ready);
    document.removeEventListener('keydown', dismiss);
    document.removeEventListener('pointerdown', dismiss);
    document.removeEventListener('focusin', dismiss);
    window.removeEventListener('pageshow', dismiss);
    loader.setAttribute('aria-hidden', 'true');
    loader.classList.add('is-leaving');
    setTimeout(() => { loader.remove(); style.remove(); }, 260);
  };
  // Wait for a paint opportunity after parsing, never for lazy iframes or analytics.
  const ready = () => requestAnimationFrame(() => requestAnimationFrame(dismiss));
  safetyTimer = setTimeout(dismiss, 3500);
  document.addEventListener('keydown', dismiss, { once: true });
  document.addEventListener('pointerdown', dismiss, { once: true });
  document.addEventListener('focusin', dismiss, { once: true });
  window.addEventListener('pageshow', dismiss, { once: true });
  document.head.append(style);
  document.body.prepend(loader);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
