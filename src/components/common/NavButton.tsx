import { ChevronLeft, ChevronRight } from 'lucide-react';

type NavDirection = 'prev' | 'next';

interface NavButtonProps {
  direction: NavDirection;
  onClick: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onMouseDown?: (e: React.MouseEvent) => void;
}

const sizeClasses = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
};

export default function NavButton({
  direction,
  onClick,
  className = '',
  size = 'md',
  onMouseDown,
}: NavButtonProps) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  const marginClass = direction === 'prev' ? 'ml-[-2px]' : 'mr-[-2px]';

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    onMouseDown?.(e);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseDown={handleMouseDown}
      className={`bg-gray8 hover:bg-accent-1 rounded-full p-2 transition-all duration-300 ${className}`}
      aria-label={direction === 'prev' ? '이전' : '다음'}
    >
      <Icon className={`text-main ${marginClass} ${sizeClasses[size]}`} />
    </button>
  );
}
