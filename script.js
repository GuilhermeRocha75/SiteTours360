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

document.querySelectorAll('.project-list').forEach((list, listIndex) => {
  const cards = Array.from(list.querySelectorAll(':scope > .project-card'));
  if (cards.length < 2) return;

  const controls = document.createElement('div');
  const status = document.createElement('span');
  const previous = document.createElement('button');
  const next = document.createElement('button');
  const label = listIndex === 0 ? 'Projetos em destaque' : 'Mais projetos';

  list.setAttribute('role', 'region');
  list.setAttribute('aria-label', label);
  list.setAttribute('tabindex', '0');

  controls.className = 'project-carousel-controls';
  controls.setAttribute('aria-label', `Controles de ${label.toLowerCase()}`);
  status.className = 'project-carousel-status';
  status.setAttribute('aria-live', 'polite');

  previous.className = 'project-carousel-button';
  previous.type = 'button';
  previous.setAttribute('aria-label', 'Ver projeto anterior');
  previous.textContent = '\u2190';

  next.className = 'project-carousel-button';
  next.type = 'button';
  next.setAttribute('aria-label', 'Ver próximo projeto');
  next.textContent = '\u2192';

  controls.append(status, previous, next);
  list.insertAdjacentElement('afterend', controls);

  const getStep = () => {
    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    return cards[0].getBoundingClientRect().width + gap;
  };

  const getCurrentIndex = () => {
    const step = getStep();
    return step ? Math.min(cards.length - 1, Math.max(0, Math.round(list.scrollLeft / step))) : 0;
  };

  const updateControls = () => {
    const current = getCurrentIndex();
    status.textContent = `${current + 1} / ${cards.length}`;
    previous.disabled = list.scrollLeft <= 2;
    next.disabled = list.scrollLeft + list.clientWidth >= list.scrollWidth - 2;
  };

  const move = direction => {
    const current = getCurrentIndex();
    const target = Math.min(cards.length - 1, Math.max(0, current + direction));
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    list.scrollTo({ left: target * getStep(), behavior });
  };

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  list.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(event.key === 'ArrowLeft' ? -1 : 1);
  });

  let updateFrame;
  list.addEventListener('scroll', () => {
    cancelAnimationFrame(updateFrame);
    updateFrame = requestAnimationFrame(updateControls);
  }, { passive: true });

  const details = list.closest('details');
  if (details) details.addEventListener('toggle', () => requestAnimationFrame(updateControls));
  if ('ResizeObserver' in window) new ResizeObserver(updateControls).observe(list);

  updateControls();
});

document.querySelectorAll('.service-grid').forEach(list => {
  const cards = Array.from(list.querySelectorAll(':scope > .service-card'));
  if (cards.length < 2) return;

  const controls = document.createElement('div');
  const status = document.createElement('span');
  const previous = document.createElement('button');
  const next = document.createElement('button');

  list.setAttribute('role', 'region');
  list.setAttribute('aria-label', 'Soluções visuais');
  list.setAttribute('tabindex', '0');

  controls.className = 'service-carousel-controls';
  controls.setAttribute('aria-label', 'Controles das soluções visuais');
  status.className = 'project-carousel-status';
  status.setAttribute('aria-live', 'polite');

  previous.className = 'project-carousel-button';
  previous.type = 'button';
  previous.setAttribute('aria-label', 'Ver solução anterior');
  previous.textContent = '\u2190';

  next.className = 'project-carousel-button';
  next.type = 'button';
  next.setAttribute('aria-label', 'Ver próxima solução');
  next.textContent = '\u2192';

  controls.append(status, previous, next);
  list.insertAdjacentElement('afterend', controls);

  const getStep = () => {
    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    return cards[0].getBoundingClientRect().width + gap;
  };

  const getCurrentIndex = () => {
    const step = getStep();
    return step ? Math.min(cards.length - 1, Math.max(0, Math.round(list.scrollLeft / step))) : 0;
  };

  const updateControls = () => {
    const current = getCurrentIndex();
    status.textContent = `${current + 1} / ${cards.length}`;
    previous.disabled = list.scrollLeft <= 2;
    next.disabled = list.scrollLeft + list.clientWidth >= list.scrollWidth - 2;
  };

  const move = direction => {
    const current = getCurrentIndex();
    const target = Math.min(cards.length - 1, Math.max(0, current + direction));
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    list.scrollTo({left:target * getStep(), behavior});
  };

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  list.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(event.key === 'ArrowLeft' ? -1 : 1);
  });

  let updateFrame;
  list.addEventListener('scroll', () => {
    cancelAnimationFrame(updateFrame);
    updateFrame = requestAnimationFrame(updateControls);
  }, {passive:true});

  if ('ResizeObserver' in window) new ResizeObserver(updateControls).observe(list);
  updateControls();
});
