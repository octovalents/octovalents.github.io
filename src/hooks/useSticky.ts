import { useEffect } from 'react';

export function useSticky(elementId = 'site-header'): void {
  useEffect(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    const handler = () => el.classList.toggle('sticky', window.scrollY > 0);
    window.addEventListener('scroll', handler, { passive: true });
    handler();

    return () => window.removeEventListener('scroll', handler);
  }, [elementId]);
}
