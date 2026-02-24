import { useCallback, useEffect, useState } from 'react';

interface UseAutoSlideOptions {
  itemsLength: number;
  interval?: number;
  autoPlay?: boolean;
}

interface UseAutoSlideReturn {
  currentIndex: number;
  progress: number;
  isVisible: boolean;
  isPaused: boolean;
  handleNext: () => void;
  handlePrev: () => void;
  handleDotClick: (index: number) => void;
  setIsPaused: (paused: boolean) => void;
  resetProgress: () => void;
}

const DEFAULT_INTERVAL = 5000;

export default function useAutoSlide({
  itemsLength,
  interval = DEFAULT_INTERVAL,
  autoPlay = true,
}: UseAutoSlideOptions): UseAutoSlideReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(!autoPlay);

  const resetProgress = useCallback(() => {
    setProgress(0);
  }, []);

  const handleNext = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % itemsLength);
      setIsVisible(true);
    }, 100);
    resetProgress();
  }, [itemsLength, resetProgress]);

  const handlePrev = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? itemsLength - 1 : prev - 1));
      setIsVisible(true);
    }, 100);
    resetProgress();
  }, [itemsLength, resetProgress]);

  const handleDotClick = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsVisible(true);
      }, 100);
      resetProgress();
    },
    [currentIndex, resetProgress],
  );

  useEffect(() => {
    if (isPaused || !autoPlay) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 100 / (interval / 50);
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPaused, autoPlay, interval, handleNext]);

  return {
    currentIndex,
    progress,
    isVisible,
    isPaused,
    handleNext,
    handlePrev,
    handleDotClick,
    setIsPaused,
    resetProgress,
  };
}
