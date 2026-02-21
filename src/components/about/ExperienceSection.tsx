import SectionWrapper from '@/components/common/SectionWrapper';
import type { ExperienceItem } from '@/types/about';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <SectionWrapper title="경력" variant="outlined">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={`experience-${index}`}
            className="border-gray8 border-b pb-6 last:border-0 last:pb-0"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-main text-xl font-semibold">{exp.title}</h3>
              <span className="text-gray2 text-sm">{exp.period}</span>
            </div>
            <p className="text-accent-2 mb-2 font-medium">{exp.company}</p>
            <p className="text-gray1">{exp.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
