export default function scrollToSection(e, id, closeMenu = () => {}) {
  e.preventDefault();
  closeMenu();

  if (id === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const url = new URL(window.location);
    url.hash = '';
    window.history.pushState({}, '', url);
    return;
  }

  const target = document.querySelector(id);
  const header = document.querySelector('.header');
  const headerHeight = header?.offsetHeight || 0;

  if (target) {
    const elementTop = target.getBoundingClientRect().top + window.scrollY;
    const offsetTop = elementTop - headerHeight;

    window.scrollTo({ top: offsetTop, behavior: 'smooth' });

    const url = new URL(window.location);
    url.hash = id.replace('#', '');
    window.history.pushState({}, '', url);
  }
}
