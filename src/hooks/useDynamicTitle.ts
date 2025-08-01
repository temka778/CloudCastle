import { useEffect } from 'react';

export default function useDynamicTitle(
  defaultTitle: string,
  sectionTitles: Record<string, string>
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const id = target.id;
            document.title = sectionTitles[id] || defaultTitle;
            break;
          }
        }
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [defaultTitle, sectionTitles]);
}
