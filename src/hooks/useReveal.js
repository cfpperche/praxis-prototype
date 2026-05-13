import { useEffect, useRef, useState } from 'react';

export function useReveal(options = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setRevealed(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    let fallback;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (fallback) clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );
    observer.observe(node);

    fallback = setTimeout(() => {
      setRevealed(true);
      observer.disconnect();
    }, 1800);

    return () => {
      observer.disconnect();
      if (fallback) clearTimeout(fallback);
    };
  }, [revealed]);

  return [ref, revealed];
}
