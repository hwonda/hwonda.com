import SectionWrapper from '@/components/common/SectionWrapper';

interface AboutMeProps {
  paragraphs: string[];
}

export default function AboutMeSection({ paragraphs }: AboutMeProps) {
  return (
    <SectionWrapper title="자기소개" variant="filled">
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={`about-paragraph-${index}`} className="text-main">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
