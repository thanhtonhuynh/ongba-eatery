import { useLayoutEffect, useState } from "react";

/**
 * Returns the width and height of the element the ref is attached to.
 * Updates on mount, window resize, and when the element itself is resized (ResizeObserver).
 *
 * The original Motion demo used a "naive" version that:
 * - Only measured once in useEffect (no resize/window listeners), so dimensions went stale.
 * - Used a ref for dimensions, so updates never triggered a re-render.
 * - Had [ref] in the dependency array, but ref identity is stable so the effect effectively ran once.
 *
 * This version uses state + useLayoutEffect + ResizeObserver so:
 * - Initial size is measured before paint (useLayoutEffect).
 * - Any time the element or window changes size, we re-measure and setState, so the component re-renders with current dimensions.
 * - Callers can rely on dimensions being up to date (or null before first measure).
 */
function useDimensions(
  ref: React.RefObject<HTMLElement | null>,
): { width: number; height: number } | null {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) {
      setDimensions(null);
      return;
    }

    const measure = () => {
      setDimensions({ width: el.offsetWidth, height: el.offsetHeight });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [ref]);

  return dimensions;
}
