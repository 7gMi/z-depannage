import { useRef, useCallback } from 'react';

export function useTilt(maxAngle = 8) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      el.style.setProperty('--tilt-x', `${x * maxAngle}deg`);
      el.style.setProperty('--tilt-y', `${-y * maxAngle}deg`);
    },
    [maxAngle]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
