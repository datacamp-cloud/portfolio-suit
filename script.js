const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') document.body.classList.add('light');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('portfolio-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.section, .project').forEach((el) => observer.observe(el));
