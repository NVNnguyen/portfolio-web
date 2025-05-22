import { useState, useEffect } from 'react';

interface Section {
  id: string;
  element: HTMLElement;
}

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections: Section[] = sectionIds
      .map(id => {
        const element = document.getElementById(id);
        return element ? { id, element } : null;
      })
      .filter((section): section is Section => section !== null);

    const observerOptions = {
      root: null, // viewport
      rootMargin: '-50% 0px -50% 0px', // triggers when section is in middle of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section.element);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section.element);
      });
    };
  }, [sectionIds]);

  return activeSection;
} 