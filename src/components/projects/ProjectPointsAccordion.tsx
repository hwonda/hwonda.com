import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import MarkdownContent from '../common/MarkdownContent';

interface ProjectPoint {
  challenges?: string;
  solutions?: string;
  results?: string;
}

interface ProjectPointsAccordionProps {
  points: ProjectPoint[];
}

const ProjectPointsAccordion = ({ points }: ProjectPointsAccordionProps) => {
  // 첫 번째 아이템이 펼쳐진 상태로 시작 (0), 없으면 null
  const [openIndex, setOpenIndex] = useState<number | null>(
    points.length > 0 ? 0 : null,
  );

  const handleToggle = (index: number) => {
    // 이미 열려있는 것을 클릭하면 닫기, 아니면 해당 인덱스 열기
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-16 space-y-6">
      {points.map((point, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            {point.challenges && (
              <div className="flex flex-col gap-2">
                <h2 className="font-pretendard text-sub text-xl font-bold">
                  도전 과제 {index + 1}
                </h2>
                <div
                  className={`accordion-header bg-gray9 flex h-full cursor-pointer justify-between rounded-lg p-6 transition-colors hover:bg-gray-800 ${isOpen ? 'rounded-b-none' : ''} ${isOpen ? 'outline-accent-2 outline-b-none outline' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  <div
                    className={`whitespace-pre-line ${isOpen ? 'text-gray2' : 'text-sub'}`}
                  >
                    <MarkdownContent content={point.challenges} />
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
                  ? 'outline-accent-2 outline-t-none grid-rows-[1fr] outline'
                  : 'grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={`accordion-content border-gray8 grid border-t transition-opacity duration-300 md:grid-cols-2 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {point.solutions && (
                    <div className="bg-gray9 h-full p-6">
                      <h3 className="font-pretendard text-accent-3/80 mb-2 text-lg font-bold">
                        {'노력 / 방법'}
                      </h3>
                      <div className="text-sub whitespace-pre-line">
                        <MarkdownContent content={point.solutions} />
                      </div>
                    </div>
                  )}
                  {point.results && (
                    <div className="bg-gray9 h-full p-6">
                      <h3 className="font-pretendard text-accent-2/80 mb-2 text-lg font-bold">
                        {'결과 / 성과'}
                      </h3>
                      <div className="text-sub whitespace-pre-line">
                        <MarkdownContent content={point.results} />
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
