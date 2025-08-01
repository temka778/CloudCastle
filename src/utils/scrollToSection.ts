export default function scrollToSection(
  e: React.MouseEvent<HTMLElement>,
  id: string,
  closeMenu: () => void = () => {}
): void {
  e.preventDefault();
  closeMenu();

  const url = new URL(window.location.href);

  if (id === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    url.hash = '';
    window.history.pushState({}, '', url);
    return;
  }

  if (!id.startsWith('#') || id.length < 2) return;

  const target = document.querySelector<HTMLElement>(id);
  if (!target) return;

  const header = document.querySelector<HTMLElement>('.header');
  const headerHeight = header?.getBoundingClientRect().height || 0;

  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

  window.scrollTo({ top, behavior: 'smooth' });

  url.hash = id.slice(1);
  window.history.pushState({}, '', url);
}
