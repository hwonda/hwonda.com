import { X } from 'lucide-react';

interface TechStackFilterProps {
  uniqueSkills: string[];
  activeTechStacks: string[];
  skillCounts: Record<string, number>;
  onTechStackChange: (tech: string) => void;
  onReset: () => void;
  variant?: 'desktop' | 'mobile';
}

export default function TechStackFilter({
  uniqueSkills,
  activeTechStacks,
  skillCounts,
  onTechStackChange,
  onReset,
  variant = 'desktop',
}: TechStackFilterProps) {
  const containerClass =
    variant === 'desktop'
      ? 'mt-4 hidden flex-col gap-2 sm:flex'
      : 'mt-6 flex flex-col gap-2 pb-2 sm:hidden';

  const showCount = variant === 'desktop';

  return (
    <div className={containerClass}>
      <div className="mt-1 flex flex-wrap gap-2 overflow-x-auto">
        {uniqueSkills.map((tech) => {
          const isActive = activeTechStacks.includes(tech);
          const isHighFrequency = skillCounts[tech] >= 3;

          const buttonClass = isActive
            ? 'bg-accent-1 text-background'
            : isHighFrequency
              ? 'bg-gray7/30 text-main hover:bg-gray6'
              : 'bg-gray8/30 text-gray1 hover:bg-gray7';

          return (
            <button
              key={tech}
              type="button"
              onClick={() => onTechStackChange(tech)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${buttonClass}`}
              aria-label={`${tech} 기술 스택으로 필터링`}
            >
              {tech}
              {showCount && (
                <span
                  className={`${isActive ? 'text-gray7' : 'text-gray4'} ml-px`}
                >
                  ({skillCounts[tech]})
                </span>
              )}
            </button>
          );
        })}
        {activeTechStacks.length > 0 && (
          <button
            type="button"
            onClick={onReset}
            className="bg-accent-2 hover:bg-accent-1 flex items-center gap-0.5 rounded-full py-1 pr-1.5 pl-2 text-xs text-white"
          >
            초기화
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
