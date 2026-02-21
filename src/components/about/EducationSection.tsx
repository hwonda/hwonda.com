import SectionWrapper from '@/components/common/SectionWrapper';
import type { EducationItem } from '@/types/about';

interface EducationProps {
  education: EducationItem[];
}

export default function EducationSection({ education }: EducationProps) {
  return (
    <SectionWrapper title="교육" variant="outlined">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={`education-${index}`}>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-main text-xl font-semibold">{edu.degree}</h3>
              <span className="text-gray2 text-sm">{edu.period}</span>
            </div>
            <p className="text-accent-2 mb-2 font-medium">{edu.institution}</p>
            <p className="text-gray1">{edu.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
