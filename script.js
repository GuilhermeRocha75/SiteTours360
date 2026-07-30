const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));

toggle.addEventListener('click', () => {
  const open = toggle.classList.toggle('open');
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  toggle.classList.remove('open');
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();
