// ---------- Theme Toggle ----------
const toggleBtn = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);
toggleBtn.textContent = saved === 'dark' ? '☀️' : '🌙';

toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ---------- AOS ----------
AOS.init({ once: true, duration: 700 });

// ---------- GSAP Hero Text ----------
gsap.from('#hero-title .line', {
  y: 70,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  stagger: 0.2
});

// ---------- GSAP Parallax Profile ----------
gsap.to('.hero-img-wrap', {
  yPercent: -15,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});

// ---------- Active Nav Link ----------
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.sidebar ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const offset = sec.offsetTop - 100;
    if (scrollY >= offset) current = sec.getAttribute('id');
  });
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

function openPosterModal(src) {
  const modal = document.getElementById('posterModal');
  const modalImg = document.getElementById('posterModalImg');
  modalImg.src = src;
  modal.classList.add('open');
}
function closePosterModal() {
  document.getElementById('posterModal').classList.remove('open');
}