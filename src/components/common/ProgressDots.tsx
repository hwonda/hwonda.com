interface ProgressDotsProps {
  total: number;
  currentIndex: number;
  progress?: number;
  onDotClick?: (index: number) => void;
  showProgress?: boolean;
}

export default function ProgressDots({
  total,
  currentIndex,
  progress = 0,
  onDotClick,
  showProgress = true,
}: ProgressDotsProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    onDotClick?.(index);
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={`progress-dot-${index}`}
          type="button"
          onClick={(e) => handleClick(e, index)}
          className={`relative h-2 overflow-hidden rounded-full transition-all duration-300 ${
            currentIndex === index
              ? 'bg-gray6 w-8'
              : 'bg-gray7 hover:bg-gray5 w-2'
          }`}
          aria-label={`${index + 1}번째 항목으로 이동`}
        >
          {currentIndex === index && showProgress && (
            <div
              className="from-accent-1 to-accent-2 absolute inset-y-0 left-0 rounded-full bg-gradient-to-r transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
