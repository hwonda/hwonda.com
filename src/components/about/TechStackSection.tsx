import { useState } from 'react';

import type { techStack } from './AboutPage';

interface TechStackProps {
  techStacks: techStack[];
}

export default function TechStackSection({ techStacks }: TechStackProps) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div className="border-gray9 rounded-lg border p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-main font-bold">기술 스택</h3>
        <div className="group flex items-center gap-2">
          <span className="text-gray1 group-hover:text-sub text-sm">
            하이라이트
          </span>
          <button
            onClick={() => setIsHighlighted(!isHighlighted)}
            className={`relative h-6 w-[42px] rounded-full transition-colors duration-300 ${
              isHighlighted ? 'bg-accent-2' : 'bg-gray7'
            }`}
            aria-label="Toggle highlight"
          >
            <div
              className={`bg-background absolute top-0.5 h-5 w-5 rounded-full shadow-md transition-transform duration-300 ${
                isHighlighted ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
      </div>
      {techStacks.map((skillGroup, index) => (
        <div className="mb-6" key={index}>
          <h4 className="text-accent-2 mb-2 font-medium">
            {skillGroup.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillGroup.skills.map((skill, idx) => {
              const skillItemClass = `${isHighlighted ? 'highlighted-skill' : 'group'} grid grid-cols-[126px_1fr] gap-2 transition-all duration-300 ${isHighlighted ? 'text-sub' : 'text-gray4 hover:text-sub'}`;
              const badgeClass = `relative h-7 rounded-full border px-3 py-0.5 text-center text-sm ${isHighlighted ? 'border-accent-2' : 'border-gray7 group-hover:border-accent-2'}`;
              const gaugeClass = `from-accent-4 to-accent-1 absolute inset-0 rounded-full bg-gradient-to-r transition-opacity duration-300 ${isHighlighted ? 'animate-fill-gauge opacity-40' : 'animate-fill-gauge opacity-0 group-hover:opacity-40'}`;
              const nameClass = `relative z-10 ${isHighlighted ? 'text-main' : 'text-sub group-hover:text-main'}`;

              return (
                <div key={idx} className={skillItemClass}>
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
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
