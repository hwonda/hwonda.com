import MarkdownContent from '@/components/common/MarkdownContent';
import SectionWrapper from '@/components/common/SectionWrapper';

interface AboutMeProps {
  paragraphs: string[];
}

export default function AboutMeSection({ paragraphs }: AboutMeProps) {
  return (
    <SectionWrapper title="자기소개" variant="filled">
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <MarkdownContent
            key={`about-paragraph-${index}`}
            content={paragraph}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
