import type { Skill } from '@/types/about';

interface SkillBadgeProps {
  skill: Skill;
  isHighlighted: boolean;
}

export default function SkillBadge({ skill, isHighlighted }: SkillBadgeProps) {
  const lowercase = (str: string) => str.toLowerCase();

  const containerClass = `${
    isHighlighted ? 'highlighted-skill' : 'group'
  } grid grid-cols-[126px_1fr] gap-2 transition-all duration-300 ${
    isHighlighted ? 'text-sub' : 'text-gray4 hover:text-sub'
  }`;

  const badgeClass = `relative h-7 rounded-full border px-3 py-0.5 text-center text-sm ${
    isHighlighted
      ? 'border-accent-2'
      : 'border-gray7 group-hover:border-accent-2'
  }`;

  const gaugeClass = `from-accent-4 to-accent-1 absolute inset-0 rounded-full bg-gradient-to-r transition-opacity duration-300 ${
    isHighlighted
      ? 'animate-fill-gauge opacity-40'
      : 'animate-fill-gauge opacity-0 group-hover:opacity-40'
  }`;

  const nameClass = `relative z-10 ${
    isHighlighted ? 'text-main' : 'text-sub group-hover:text-main'
  }`;

  return (
    <a
      href={`/projects?stack=${encodeURIComponent(lowercase(skill.name))}`}
      className={containerClass}
    >
      <span className={badgeClass}>
        <span
          key={`gauge-${isHighlighted}`}
          className={gaugeClass}
          style={
            {
              '--gauge-width': `${skill.proficiency}%`,
              ...(isHighlighted && {
                animationPlayState: 'running',
              }),
            } as React.CSSProperties
          }
        />
        <span className={nameClass}>{skill.name}</span>
      </span>
      <span className="mt-[3px] text-sm">{skill.description}</span>
    </a>
  );
}
