import type { RefObject } from 'react';
import { useCallback, useEffect, useState } from 'react';

interface GlowPosition {
  x: number;
  y: number;
}

interface UseMouseGlowOptions {
  elementRef?: RefObject<HTMLElement | null>;
  defaultPosition?: GlowPosition;
  useViewport?: boolean;
}

interface UseMouseGlowReturn {
  glowPosition: GlowPosition;
  isVisible: boolean;
  handleMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

const DEFAULT_POSITION: GlowPosition = { x: 50, y: 50 };

export default function useMouseGlow({
  elementRef,
  defaultPosition = DEFAULT_POSITION,
  useViewport = false,
}: UseMouseGlowOptions = {}): UseMouseGlowReturn {
  const [glowPosition, setGlowPosition] =
    useState<GlowPosition>(defaultPosition);
  const [isVisible, setIsVisible] = useState(false);

  // Element-based mouse move handler (for cards, etc.)
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const element = elementRef?.current || (e.currentTarget as HTMLElement);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setGlowPosition({ x, y });
      setIsVisible(true);
    },
    [elementRef],
  );

  // Viewport-based mouse tracking (for background effects)
  useEffect(() => {
    if (!useViewport) return;

    const handleViewportMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y =
        ((e.clientY + window.scrollY) / document.documentElement.scrollHeight) *
        100;
      setGlowPosition({ x, y });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleViewportMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleViewportMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [useViewport]);

  return {
    glowPosition,
    isVisible,
    handleMouseMove,
  };
}
