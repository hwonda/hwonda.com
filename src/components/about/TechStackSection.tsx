import { useState } from 'react';

import type { TechStack } from '@/types/about';

import SkillBadge from './SkillBadge';

interface TechStackProps {
  techStacks: TechStack[];
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
            aria-label="하이라이트 토글"
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
        <div className="mb-6" key={`skill-group-${index}`}>
          <h4 className="text-accent-2 mb-2 font-medium">
            {skillGroup.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillGroup.skills.map((skill, idx) => (
              <SkillBadge
                key={`skill-${index}-${idx}`}
                skill={skill}
                isHighlighted={isHighlighted}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
