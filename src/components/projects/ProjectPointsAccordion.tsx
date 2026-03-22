import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import MarkdownContent from '../common/MarkdownContent';

interface ProjectPoint {
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
  image?: string;
}

interface ProjectPointsAccordionProps {
  points: ProjectPoint[];
}

const ProjectPointsAccordion = ({ points }: ProjectPointsAccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    new Set(points.length > 0 ? [0] : []),
  );

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="my-16 space-y-6">
      <h2 className="font-pretendard text-sub text-xl font-bold">
        프로젝트 회고
      </h2>
      {points.map((point, index) => {
        const isOpen = openIndexes.has(index);

        return (
          <div key={index}>
            {point.situation && (
              <div className="flex flex-col gap-2">
                <div
                  className={`accordion-header bg-gray9 flex h-full cursor-pointer items-center justify-between gap-6 rounded-lg p-6 transition-colors hover:bg-gray-800 ${isOpen ? 'rounded-b-none' : ''} ${isOpen ? 'outline-accent-2/60 outline-b-none outline' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  <div
                    className={`flex items-start whitespace-pre-line ${isOpen ? 'text-gray2' : 'text-sub'}`}
                  >
                    <span className="text-gray1 mr-1">{index + 1}.</span>
                    <MarkdownContent content={point.situation} />
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    size={20}
                  />
                </div>
              </div>
            )}
            <div
              className={`grid rounded-b-lg transition-[grid-template-rows] duration-400 ease-in-out ${
                isOpen
                  ? 'outline-accent-2/60 outline-t-none grid-rows-[1fr] outline'
                  : 'grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={`accordion-content border-gray8 border-t transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {point.image && (
                    <div className="bg-gray9 p-6">
                      <img
                        src={point.image}
                        alt={`${point.situation || ''} 관련 이미지`}
                        loading="lazy"
                        className="w-full rounded-lg object-cover"
                      />
                    </div>
                  )}
                  {point.task && (
                    <div className="bg-gray9 border-gray8 p-6">
                      <h3 className="font-pretendard text-accent-1/80 mb-2 text-lg font-bold">
                        Task
                      </h3>
                      <div className="text-sub whitespace-pre-line">
                        <MarkdownContent content={point.task} />
                      </div>
                    </div>
                  )}
                  {point.action && (
                    <div className="bg-gray9 border-gray8 border-t p-6">
                      <h3 className="font-pretendard text-accent-3/80 mb-2 text-lg font-bold">
                        Action
                      </h3>
                      <div className="text-sub whitespace-pre-line">
                        <MarkdownContent content={point.action} />
                      </div>
                    </div>
                  )}
                  {point.result && (
                    <div className="bg-gray9 border-gray8 border-t p-6">
                      <h3 className="font-pretendard text-accent-2/80 mb-2 text-lg font-bold">
                        Result
                      </h3>
                      <div className="text-sub whitespace-pre-line">
                        <MarkdownContent content={point.result} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectPointsAccordion;
