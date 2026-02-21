import type { MouseEvent, TouchEvent } from 'react';
import { useCallback, useRef, useState } from 'react';

interface UseSwipeOptions {
  onPrev: () => void;
  onNext: () => void;
  minSwipeDistance?: number;
  maxOffset?: number;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
}

interface UseSwipeReturn {
  swipeOffset: number;
  isDragging: boolean;
  handlers: {
    onTouchStart: (e: TouchEvent<HTMLElement>) => void;
    onTouchMove: (e: TouchEvent<HTMLElement>) => void;
    onTouchEnd: () => void;
    onMouseDown: (e: MouseEvent<HTMLElement>) => void;
    onMouseMove: (e: MouseEvent<HTMLElement>) => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
  };
}

const DEFAULT_MIN_SWIPE_DISTANCE = 50;
const DEFAULT_MAX_OFFSET = 150;

export default function useSwipe({
  onPrev,
  onNext,
  minSwipeDistance = DEFAULT_MIN_SWIPE_DISTANCE,
  maxOffset = DEFAULT_MAX_OFFSET,
  onSwipeStart,
  onSwipeEnd,
}: UseSwipeOptions): UseSwipeReturn {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);

  const calculateLimitedOffset = useCallback(
    (currentX: number) => {
      const currentOffset = currentX - touchStartX.current;
      return Math.max(Math.min(currentOffset, maxOffset), -maxOffset);
    },
    [maxOffset],
  );

  const handleSwipeEnd = useCallback(
    (endX: number) => {
      const swipeDistance = endX - touchStartX.current;
      setSwipeOffset(0);
      onSwipeEnd?.();

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          onPrev();
        } else {
          onNext();
        }
      }
    },
    [minSwipeDistance, onPrev, onNext, onSwipeEnd],
  );

  // Touch event handlers
  const onTouchStart = useCallback(
    (e: TouchEvent<HTMLElement>) => {
      touchStartX.current = e.touches[0].clientX;
      onSwipeStart?.();
    },
    [onSwipeStart],
  );

  const onTouchMove = useCallback(
    (e: TouchEvent<HTMLElement>) => {
      touchEndX.current = e.touches[0].clientX;
      setSwipeOffset(calculateLimitedOffset(touchEndX.current));
    },
    [calculateLimitedOffset],
  );

  const onTouchEnd = useCallback(() => {
    handleSwipeEnd(touchEndX.current);
  }, [handleSwipeEnd]);

  // Mouse event handlers
  const onMouseDown = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (e.button !== 0) return;
      touchStartX.current = e.clientX;
      setIsDragging(true);
      onSwipeStart?.();
      e.preventDefault();
    },
    [onSwipeStart],
  );

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (!isDragging) return;
      touchEndX.current = e.clientX;
      setSwipeOffset(calculateLimitedOffset(touchEndX.current));
    },
    [isDragging, calculateLimitedOffset],
  );

  const onMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    handleSwipeEnd(touchEndX.current);
  }, [isDragging, handleSwipeEnd]);

  const onMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setSwipeOffset(0);
      onSwipeEnd?.();
    }
  }, [isDragging, onSwipeEnd]);

  return {
    swipeOffset,
    isDragging,
    handlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseLeave,
    },
  };
}
