import { useEffect, useRef, type RefObject } from 'react';

/**
 * useScrollAnimation
 * Triggers a CSS class on the referenced element when it enters the viewport.
 * Uses IntersectionObserver for performance — no scroll event listeners.
 *
 * @param animationClass - the CSS class to add when element is visible (e.g. 'animate-fade-up')
 * @param threshold - how much of the element must be visible (0-1, default 0.15)
 */
export function useScrollAnimation<T extends HTMLElement>(
  animationClass: string = 'animate-fade-up',
  threshold: number = 0.15
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(animationClass);
          observer.unobserve(el); // Only animate once
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [animationClass, threshold]);

  return ref;
}

export default useScrollAnimation;
