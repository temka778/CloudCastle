import { useEffect } from 'react';

export default function useDynamicTitle(defaultTitle, sectionTitles) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            document.title = sectionTitles[id] || defaultTitle;
            break;
          }
        }
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [defaultTitle, sectionTitles]);
}
